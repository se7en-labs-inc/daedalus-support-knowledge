import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { articleId, isArticleUrl, validateRedirect } from "./lib/urls.mjs";
import {
  extractArticle,
  frontmatter,
  htmlToMarkdown,
  localizeAssets,
  safeFilename,
  slugify,
} from "./lib/content.mjs";
import { archiveOne } from "./lib/archive.mjs";
import { retainUnavailable, serializeManifest } from "./lib/manifest.mjs";
import { LIMITS } from "./lib/archive-config.mjs";
import { linksFromDiscoveryPage } from "./lib/discovery.mjs";
import { AssetArchiveError } from "./lib/archive.mjs";
import { runFetch } from "./archive-daedalus-support.mjs";

const URL =
  "https://iohk.zendesk.com/hc/en-us/articles/123456-Importing-wallets";
const html = (text = "Keep this paragraph.", image = false) =>
  `<!doctype html><html><head><meta property="article:published_time" content="2020-01-02T00:00:00Z"></head><body><h1>Importing wallets</h1><article><h2>Steps</h2><p>${text} <strong>Important</strong></p><ol><li>First</li></ol><pre><code>x = 1</code></pre>${image ? '<img src="https://iohk.zendesk.com/attachments/screenshot.png" alt="screen">' : ""}</article></body></html>`;
const response = (body, contentType = "text/html", status = 200) =>
  new Response(body, { status, headers: { "content-type": contentType } });

test("accepts only canonical Daedalus support article URLs", () => {
  assert.equal(isArticleUrl(URL), true);
  assert.equal(articleId(URL), "123456");
  for (const value of [
    "https://example.com/hc/en-us/articles/123",
    "http://iohk.zendesk.com/hc/en-us/articles/123",
    "file:///etc/passwd",
    "https://localhost/hc/en-us/articles/123",
    "https://user:pass@iohk.zendesk.com/hc/en-us/articles/123",
    "https://iohk.zendesk.com/hc/fr/articles/123",
  ])
    assert.equal(isArticleUrl(value), false, value);
});

test("validates every redirect destination", () => {
  assert.equal(
    validateRedirect(URL, "https://iohk.zendesk.com/hc/en-us/articles/123")
      .hostname,
    "iohk.zendesk.com",
  );
  assert.throws(
    () => validateRedirect(URL, "https://evil.example/article"),
    /allowlist/,
  );
  assert.throws(
    () => validateRedirect(URL, "file:///etc/passwd"),
    /Rejected URL/,
  );
});

test("mixed support pages select only locally Daedalus-scoped links", async () => {
  const fixture = await fs.readFile(
    new globalThis.URL("./fixtures/mixed-support-page.html", import.meta.url),
    "utf8",
  );
  const result = linksFromDiscoveryPage(
    fixture,
    "https://iohk.zendesk.com/hc/en-us",
  );
  assert.deepEqual(
    result.articles.map(({ url }) => url),
    ["https://iohk.zendesk.com/hc/en-us/articles/100"],
  );
  assert.deepEqual(
    result.navigation.map(({ url }) => url),
    ["https://iohk.zendesk.com/hc/en-us/sections/10-daedalus"],
  );
});

test("generates deterministic safe paths and rejects traversal names", () => {
  assert.equal(slugify("  Importing Wálléts! "), "importing-wallets");
  assert.equal(safeFilename("../../secret.key"), "secret.key");
  assert.equal(safeFilename(".."), "asset");
});

test("normalizes article structure without scripts and localizes images", () => {
  const article = extractArticle(
    `${html("Text", true)}<script>alert(1)</script>`,
    URL,
  );
  const assets = localizeAssets(article, "123456");
  const markdown = htmlToMarkdown(article.root.html());
  assert.match(markdown, /## Steps/);
  assert.match(markdown, /\*\*Important\*\*/);
  assert.match(markdown, /1\.  First/);
  assert.match(markdown, /```/);
  assert.match(markdown, /\.\.\/assets\/123456\/screenshot\.png/);
  assert.doesNotMatch(markdown, /alert/);
  assert.equal(assets[0].localPath, "assets/123456/screenshot.png");
});

test("frontmatter records provenance and omits unavailable timestamps", () => {
  const value = frontmatter({
    title: "Importing wallets",
    originalUrl: URL,
    articleId: "123456",
    retrievedAt: "2026-08-15T00:00:00Z",
  });
  assert.match(value, /source_name: "IOHK Support"/);
  assert.match(value, /copyright_holder: "Input Output"/);
  assert.match(value, /product: "Daedalus"/);
  assert.doesNotMatch(value, /original_published_at/);
});

test("manifest output is deterministic and unavailable archives are retained", () => {
  const manifest = {
    schema_version: 1,
    articles: [
      { article_id: "20", assets: [] },
      { article_id: "3", assets: [] },
    ],
  };
  assert.equal(
    serializeManifest(manifest, "fixed"),
    serializeManifest(manifest, "fixed"),
  );
  assert.deepEqual(
    JSON.parse(serializeManifest(manifest, "fixed")).articles.map(
      (x) => x.article_id,
    ),
    ["3", "20"],
  );
  const retained = retainUnavailable(manifest.articles, new Set(["20"]));
  assert.equal(
    retained.find((x) => x.article_id === "3").source_status,
    "unavailable",
  );
});

test("archive is incremental for unchanged and changed articles", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "ariadne-archive-"));
  const fetcher = async () => ({ response: response(html()), url: URL });
  const first = await archiveOne({
    url: URL,
    root,
    fetcher,
    now: () => "2026-08-15T00:00:00Z",
  });
  assert.equal(first.outcome, "archived");
  const markdownPath = path.join(root, first.article.local_markdown_path);
  const before = await fs.stat(markdownPath);
  const second = await archiveOne({
    url: URL,
    root,
    existing: first.article,
    fetcher,
    now: () => "2026-08-16T00:00:00Z",
  });
  assert.equal(second.outcome, "unchanged");
  assert.equal((await fs.stat(markdownPath)).mtimeMs, before.mtimeMs);
  const changed = await archiveOne({
    url: URL,
    root,
    existing: second.article,
    fetcher: async () => ({ response: response(html("Changed")), url: URL }),
    now: () => "2026-08-17T00:00:00Z",
  });
  assert.equal(changed.outcome, "updated");
  assert.notEqual(changed.article.content_hash, first.article.content_hash);
});

test("title, source metadata, asset references, and same-URL asset bytes affect updates", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "daedalus-archive-"));
  const makeFetcher =
    (articleHtml, assetBody = "image-one") =>
    async (url) => ({
      response: response(
        url.includes("attachments") ? assetBody : articleHtml,
        url.includes("attachments") ? "image/png" : "text/html",
      ),
      url,
    });
  const first = await archiveOne({
    url: URL,
    root,
    fetcher: makeFetcher(html("Text", true)),
  });
  const unchanged = await archiveOne({
    url: URL,
    root,
    existing: first.article,
    fetcher: makeFetcher(html("Text", true)),
  });
  assert.equal(unchanged.outcome, "unchanged");
  assert.equal(unchanged.assetsDownloaded, 1);

  const changedAsset = await archiveOne({
    url: URL,
    root,
    existing: unchanged.article,
    fetcher: makeFetcher(html("Text", true), "image-two"),
  });
  assert.equal(changedAsset.outcome, "updated");

  const changedReference = await archiveOne({
    url: URL,
    root,
    existing: changedAsset.article,
    fetcher: makeFetcher(
      html("Text", true).replace("screenshot.png", "replacement.png"),
      "image-two",
    ),
  });
  assert.equal(changedReference.outcome, "updated");

  const changedTitle = await archiveOne({
    url: URL,
    root,
    existing: changedReference.article,
    fetcher: makeFetcher(
      html("Text", true).replace("Importing wallets", "Restoring wallets"),
      "image-two",
    ),
  });
  assert.equal(changedTitle.outcome, "updated");

  const changedMetadata = await archiveOne({
    url: URL,
    root,
    existing: changedTitle.article,
    fetcher: makeFetcher(
      html("Text", true)
        .replace("Importing wallets", "Restoring wallets")
        .replace("2020-01-02", "2021-03-04"),
      "image-two",
    ),
  });
  assert.equal(changedMetadata.outcome, "updated");
});

test("asset failures report completed downloads without changing archived files", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "daedalus-archive-"));
  const twoImages = html().replace(
    "</article>",
    '<img src="https://iohk.zendesk.com/attachments/one.png"><img src="https://iohk.zendesk.com/attachments/two.png"></article>',
  );
  const fetcher = async (url) => {
    if (url.includes("two.png"))
      return { response: response("failure", "text/plain", 503), url };
    return {
      response: response(url.includes("one.png") ? "image" : twoImages),
      url,
    };
  };
  await assert.rejects(
    () => archiveOne({ url: URL, root, fetcher }),
    (error) => {
      assert.ok(error instanceof AssetArchiveError);
      assert.equal(error.assetsDownloaded, 1);
      return true;
    },
  );
  await assert.rejects(
    fs.access(path.join(root, "assets/123456/one.png")),
    /ENOENT/,
  );
});

test("successful refresh deletes obsolete assets and retains current assets", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "daedalus-archive-"));
  const assetDirectory = path.join(root, "assets/123456");
  await fs.mkdir(assetDirectory, { recursive: true });
  await fs.writeFile(path.join(assetDirectory, "obsolete.txt"), "stale");
  await fs.writeFile(path.join(assetDirectory, "screenshot.png"), "old-image");
  const existing = {
    article_id: "123456",
    content_hash: "old-source",
    assets: [
      { local_path: "assets/123456/obsolete.txt" },
      { local_path: "assets/123456/screenshot.png" },
    ],
  };
  const fetcher = async (url) => ({
    response: response(
      url.includes("attachments") ? "new-image" : html("Updated", true),
      url.includes("attachments") ? "image/png" : "text/html",
    ),
    url,
  });
  const result = await archiveOne({ url: URL, root, existing, fetcher });
  assert.equal(result.outcome, "updated");
  await assert.rejects(
    fs.access(path.join(assetDirectory, "obsolete.txt")),
    /ENOENT/,
  );
  assert.equal(
    await fs.readFile(path.join(assetDirectory, "screenshot.png"), "utf8"),
    "new-image",
  );
});

test("asset fetch failure preserves every previously archived asset", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "daedalus-archive-"));
  const assetDirectory = path.join(root, "assets/123456");
  await fs.mkdir(assetDirectory, { recursive: true });
  await fs.writeFile(path.join(assetDirectory, "old-a.txt"), "old-a");
  await fs.writeFile(path.join(assetDirectory, "old-b.txt"), "old-b");
  const existing = {
    article_id: "123456",
    content_hash: "old-source",
    assets: [
      { local_path: "assets/123456/old-a.txt" },
      { local_path: "assets/123456/old-b.txt" },
    ],
  };
  const articleHtml = html("Updated").replace(
    "</article>",
    '<img src="https://iohk.zendesk.com/attachments/new-a.png"><img src="https://iohk.zendesk.com/attachments/new-b.png"></article>',
  );
  const fetcher = async (url) => ({
    response: url.includes("new-b.png")
      ? response("failure", "text/plain", 503)
      : response(url.includes("new-a.png") ? "new-a" : articleHtml),
    url,
  });
  await assert.rejects(
    () => archiveOne({ url: URL, root, existing, fetcher }),
    AssetArchiveError,
  );
  assert.equal(
    await fs.readFile(path.join(assetDirectory, "old-a.txt"), "utf8"),
    "old-a",
  );
  assert.equal(
    await fs.readFile(path.join(assetDirectory, "old-b.txt"), "utf8"),
    "old-b",
  );
});

test("obsolete asset cleanup refuses symlink escape before deleting anything", async (t) => {
  if (process.platform === "win32")
    return t.skip("file symlink creation is privilege-dependent on Windows");
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "daedalus-archive-"));
  const outside = path.join(root, "outside.txt");
  const assetDirectory = path.join(root, "assets/123456");
  await fs.mkdir(assetDirectory, { recursive: true });
  await fs.writeFile(outside, "outside");
  await fs.writeFile(path.join(assetDirectory, "safe-old.txt"), "safe-old");
  await fs.symlink(outside, path.join(assetDirectory, "unsafe-link.txt"));
  const existing = {
    article_id: "123456",
    content_hash: "old-source",
    assets: [
      { local_path: "assets/123456/safe-old.txt" },
      { local_path: "assets/123456/unsafe-link.txt" },
    ],
  };
  await assert.rejects(
    () =>
      archiveOne({
        url: URL,
        root,
        existing,
        fetcher: async () => ({
          response: response(html("Updated")),
          url: URL,
        }),
      }),
    /symlink/,
  );
  assert.equal(await fs.readFile(outside, "utf8"), "outside");
  assert.equal(
    await fs.readFile(path.join(assetDirectory, "safe-old.txt"), "utf8"),
    "safe-old",
  );
  assert.equal(
    (
      await fs.lstat(path.join(assetDirectory, "unsafe-link.txt"))
    ).isSymbolicLink(),
    true,
  );
});

test("fetch workflow marks only completed-discovery omissions unavailable", async () => {
  const execute = async (completed) => {
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "daedalus-workflow-"));
    const articleA = {
      article_id: "100",
      source_status: "available",
      assets: [],
    };
    const articleB = {
      article_id: "200",
      source_status: "available",
      assets: [],
    };
    await fs.writeFile(
      path.join(root, "manifest.json"),
      JSON.stringify({ schema_version: 1, articles: [articleA, articleB] }),
    );
    await fs.writeFile(
      path.join(root, "discovered-articles.json"),
      JSON.stringify({
        completed,
        articles: [{ url: "https://iohk.zendesk.com/hc/en-us/articles/100" }],
      }),
    );
    await runFetch({
      root,
      now: () => "2026-08-15T00:00:00Z",
      log: () => {},
      archiveArticle: async ({ existing }) => ({
        outcome: "unchanged",
        assetsDownloaded: 0,
        article: existing,
      }),
    });
    return JSON.parse(
      await fs.readFile(path.join(root, "manifest.json"), "utf8"),
    );
  };

  const completed = await execute(true);
  assert.equal(
    completed.articles.find(({ article_id }) => article_id === "100")
      .source_status,
    "available",
  );
  assert.equal(
    completed.articles.find(({ article_id }) => article_id === "200")
      .source_status,
    "unavailable",
  );

  const incomplete = await execute(false);
  assert.equal(
    incomplete.articles.find(({ article_id }) => article_id === "200")
      .source_status,
    "available",
  );
});

test("an unavailable article retains its existing archive record", async () => {
  const existing = {
    article_id: "123456",
    local_markdown_path: "articles/existing.md",
  };
  const result = await archiveOne({
    url: URL,
    root: "/unused",
    existing,
    fetcher: async () => ({
      response: response("missing", "text/plain", 404),
      url: URL,
    }),
  });
  assert.equal(result.article.local_markdown_path, "articles/existing.md");
  assert.equal(result.article.source_status, "unavailable");
});

test("rejects oversized articles and excessive assets", async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), "ariadne-archive-"));
  await assert.rejects(
    () =>
      archiveOne({
        url: URL,
        root,
        fetcher: async () => ({
          response: response("x".repeat(LIMITS.maxArticleBytes + 1)),
          url: URL,
        }),
      }),
    /exceeds/,
  );
  const images = Array.from(
    { length: LIMITS.maxAssetsPerArticle + 1 },
    (_, i) => `<img src="https://assets.example/${i}.png">`,
  ).join("");
  await assert.rejects(
    () =>
      archiveOne({
        url: URL,
        root,
        fetcher: async () => ({
          response: response(
            html().replace("</article>", `${images}</article>`),
          ),
          url: URL,
        }),
      }),
    /asset count/,
  );
});
