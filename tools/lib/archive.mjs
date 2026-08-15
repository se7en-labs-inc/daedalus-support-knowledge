import fs from "node:fs/promises";
import path from "node:path";
import { articleId, canonicalArticleUrl } from "./urls.mjs";
import { boundedBody, politeFetch } from "./network.mjs";
import {
  extractArticle,
  frontmatter,
  htmlToMarkdown,
  localizeAssets,
  sha256,
  slugify,
} from "./content.mjs";
import { LIMITS } from "./archive-config.mjs";

async function atomicWrite(filename, value) {
  await fs.mkdir(path.dirname(filename), { recursive: true });
  const temporary = `${filename}.${process.pid}.tmp`;
  await fs.writeFile(temporary, value);
  await fs.rename(temporary, filename);
}

async function lstatIfPresent(filename) {
  try {
    return await fs.lstat(filename);
  } catch (error) {
    if (error.code === "ENOENT") return undefined;
    throw error;
  }
}

async function prepareObsoleteAssetCleanup(
  root,
  articleId,
  existingAssets,
  newAssets,
) {
  const retained = new Set(
    newAssets.map(({ local_path: localPath }) => localPath),
  );
  const obsolete = existingAssets
    .map(({ local_path: localPath }) => localPath)
    .filter((localPath) => !retained.has(localPath));
  if (!obsolete.length) return [];

  const expectedPrefix = `assets/${articleId}/`;
  const assetsRoot = path.resolve(root, "assets");
  const articleRoot = path.resolve(assetsRoot, articleId);
  const prepared = [];
  for (const localPath of obsolete) {
    if (
      typeof localPath !== "string" ||
      !localPath.startsWith(expectedPrefix) ||
      path.posix.normalize(localPath) !== localPath ||
      localPath.includes("\\")
    )
      throw new Error("Refused unsafe obsolete asset path");
    const target = path.resolve(root, ...localPath.split("/"));
    if (!target.startsWith(`${articleRoot}${path.sep}`))
      throw new Error("Refused obsolete asset path outside article directory");

    const relativeParts = path.relative(root, target).split(path.sep);
    let current = path.resolve(root);
    let targetExists = false;
    for (const [index, part] of relativeParts.entries()) {
      current = path.join(current, part);
      const stat = await lstatIfPresent(current);
      if (!stat) break;
      if (stat.isSymbolicLink())
        throw new Error("Refused symlink in obsolete asset cleanup path");
      if (index < relativeParts.length - 1 && !stat.isDirectory())
        throw new Error("Refused non-directory in obsolete asset cleanup path");
      if (index === relativeParts.length - 1 && !stat.isFile())
        throw new Error("Refused non-file obsolete asset cleanup target");
      if (index === relativeParts.length - 1) targetExists = true;
    }
    if (targetExists) {
      const [physicalArticleRoot, physicalTarget] = await Promise.all([
        fs.realpath(articleRoot),
        fs.realpath(target),
      ]);
      if (!physicalTarget.startsWith(`${physicalArticleRoot}${path.sep}`))
        throw new Error("Refused physical obsolete asset path escape");
    }
    prepared.push({ articleRoot, target });
  }
  return prepared;
}

async function removePreparedObsoleteAssets(prepared) {
  // Validate every target once more before deleting any of them. This both
  // avoids partial cleanup and refuses a path replaced with a link after the
  // refreshed archive was written.
  for (const { articleRoot, target } of prepared) {
    const cleanupDirectories = [path.dirname(articleRoot), articleRoot];
    let parent = path.dirname(target);
    while (parent !== articleRoot) {
      cleanupDirectories.push(parent);
      const next = path.dirname(parent);
      if (next === parent)
        throw new Error("Refused changed obsolete asset parent escape");
      parent = next;
    }
    for (const directory of cleanupDirectories) {
      const directoryStat = await lstatIfPresent(directory);
      if (directoryStat?.isSymbolicLink())
        throw new Error("Refused changed symlink in asset cleanup path");
      if (directoryStat && !directoryStat.isDirectory())
        throw new Error("Refused changed non-directory asset cleanup path");
    }
    const stat = await lstatIfPresent(target);
    if (stat?.isSymbolicLink() || (stat && !stat.isFile()))
      throw new Error("Refused changed obsolete asset cleanup target");
    if (stat) {
      const [physicalArticleRoot, physicalTarget] = await Promise.all([
        fs.realpath(articleRoot),
        fs.realpath(target),
      ]);
      if (!physicalTarget.startsWith(`${physicalArticleRoot}${path.sep}`))
        throw new Error("Refused changed physical obsolete asset path escape");
    }
  }
  for (const { target } of prepared) {
    try {
      await fs.unlink(target);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
}

export async function archiveOne({
  url,
  root,
  existing,
  now = () => new Date().toISOString(),
  fetcher = politeFetch,
}) {
  const originalUrl = canonicalArticleUrl(url);
  const id = articleId(originalUrl);
  const { response } = await fetcher(originalUrl, {
    kind: "primary",
    maxBytes: LIMITS.maxArticleBytes,
  });
  if (response.status === 404 || response.status === 410)
    return {
      outcome: "unavailable",
      article: existing && { ...existing, source_status: "unavailable" },
    };
  if (!response.ok) throw new Error(`Article returned HTTP ${response.status}`);
  const html = await boundedBody(response, LIMITS.maxArticleBytes, "text");
  const parsed = extractArticle(html, originalUrl);
  if (parsed.assets.length > LIMITS.maxAssetsPerArticle)
    throw new Error("Article asset count exceeds limit");
  const assets = localizeAssets(parsed, id);
  const body = htmlToMarkdown(parsed.root.html());
  const contentHash = sha256(
    JSON.stringify({
      title: parsed.title,
      body,
      published: parsed.published || null,
      updated: parsed.updated || null,
      assets: assets.map(({ originalUrl, kind, localPath }) => ({
        originalUrl,
        kind,
        localPath,
      })),
    }),
  );

  const retrievedAt = now();
  const assetRecords = [];
  const assetBodies = [];
  try {
    for (const asset of assets) {
      const result = await fetcher(asset.originalUrl, {
        kind: "asset",
        maxBytes: LIMITS.maxAssetBytes,
      });
      if (!result.response.ok)
        throw new Error(`Asset returned HTTP ${result.response.status}`);
      const bytes = await boundedBody(result.response, LIMITS.maxAssetBytes);
      assetBodies.push({ localPath: asset.localPath, bytes });
      assetRecords.push({
        original_url: asset.originalUrl,
        local_path: asset.localPath,
        content_type:
          result.response.headers.get("content-type") ||
          "application/octet-stream",
        content_hash: sha256(bytes),
        retrieved_at: retrievedAt,
      });
    }
  } catch (cause) {
    throw new AssetArchiveError(
      cause instanceof Error ? cause.message : "Asset archival failed",
      assetRecords.length,
      { cause },
    );
  }
  const existingAssets = existing?.assets || [];
  const assetsChanged =
    existingAssets.length !== assetRecords.length ||
    assetRecords.some(
      (asset, index) =>
        asset.local_path !== existingAssets[index]?.local_path ||
        asset.original_url !== existingAssets[index]?.original_url ||
        asset.content_type !== existingAssets[index]?.content_type ||
        asset.content_hash !== existingAssets[index]?.content_hash,
    );
  if (existing?.content_hash === contentHash && !assetsChanged)
    return {
      outcome: "unchanged",
      assetsDownloaded: assetRecords.length,
      article: {
        ...existing,
        source_status: "available",
        last_checked_at: retrievedAt,
      },
    };
  const articlePath = `articles/${id}-${slugify(parsed.title)}.md`;
  const rawPath = `raw/${id}.html`;
  const markdown =
    frontmatter({
      title: parsed.title,
      originalUrl,
      articleId: id,
      retrievedAt,
      published: parsed.published,
      updated: parsed.updated,
    }) + body;
  const obsoleteAssetTargets = await prepareObsoleteAssetCleanup(
    root,
    id,
    existingAssets,
    assetRecords,
  );
  for (const asset of assetBodies) {
    await atomicWrite(path.join(root, asset.localPath), asset.bytes);
  }
  await atomicWrite(path.join(root, rawPath), html);
  await atomicWrite(path.join(root, articlePath), markdown);
  await removePreparedObsoleteAssets(obsoleteAssetTargets);
  if (
    existing?.local_markdown_path &&
    existing.local_markdown_path !== articlePath
  )
    await fs.rm(path.join(root, existing.local_markdown_path), { force: true });
  return {
    outcome: existing ? "updated" : "archived",
    assetsDownloaded: assetRecords.length,
    article: {
      article_id: id,
      title: parsed.title,
      original_url: originalUrl,
      local_markdown_path: articlePath,
      local_raw_path: rawPath,
      content_hash: contentHash,
      retrieved_at: retrievedAt,
      ...(parsed.published && { original_published_at: parsed.published }),
      ...(parsed.updated && { original_updated_at: parsed.updated }),
      source_status: "available",
      assets: assetRecords,
    },
  };
}

export class AssetArchiveError extends Error {
  constructor(message, assetsDownloaded, options) {
    super(message, options);
    this.name = "AssetArchiveError";
    this.assetsDownloaded = assetsDownloaded;
  }
}
