import path from "node:path";
import crypto from "node:crypto";
import * as cheerio from "cheerio";
import TurndownService from "turndown";

export const sha256 = (value) =>
  crypto.createHash("sha256").update(value).digest("hex");

export function slugify(value) {
  const slug = value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
  return slug || "article";
}

export function safeFilename(value, fallback = "asset") {
  const decoded = decodeURIComponent(value).normalize("NFKC");
  const base = path.posix
    .basename(decoded)
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .replace(/[^A-Za-z0-9._-]+/g, "-")
    .replace(/^\.+/, "")
    .slice(-120);
  if (!base || base === "." || base === "..") return fallback;
  return base;
}

export function extractArticle(html, originalUrl) {
  const $ = cheerio.load(html, { scriptingEnabled: false });
  $("script,style,iframe,object,embed,noscript").remove();
  const root = $(".article-body, [data-article-body], article").first();
  if (!root.length) throw new Error("Article body was not found");
  const title =
    $("h1").first().text().trim() ||
    $("meta[property='og:title']").attr("content")?.trim();
  if (!title) throw new Error("Article title was not found");
  const published =
    $("time[datetime]").first().attr("datetime") ||
    $("meta[property='article:published_time']").attr("content");
  const updated =
    $("meta[property='article:modified_time']").attr("content") ||
    $("time[datetime]").last().attr("datetime");
  const assets = [];
  root.find("img").each((_, element) => {
    const src = $(element).attr("src");
    if (!src) return;
    const absolute = new URL(src, originalUrl);
    if (
      absolute.protocol !== "https:" ||
      absolute.username ||
      absolute.password
    )
      return;
    assets.push({ element, originalUrl: absolute.href, kind: "image" });
  });
  root.find("a[href]").each((_, element) => {
    const href = $(element).attr("href");
    const absolute = new URL(href, originalUrl);
    if (
      absolute.protocol === "https:" &&
      /\/attachments?\//i.test(absolute.pathname)
    )
      assets.push({ element, originalUrl: absolute.href, kind: "attachment" });
  });
  return {
    $,
    root,
    title,
    published: published || undefined,
    updated: updated || undefined,
    assets,
  };
}

export function htmlToMarkdown(rootHtml) {
  const service = new TurndownService({
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
    headingStyle: "atx",
  });
  service.keep(["table", "thead", "tbody", "tr", "th", "td"]);
  return `${service.turndown(rootHtml).trim()}\n`;
}

function yaml(value) {
  return JSON.stringify(String(value));
}

export function frontmatter(metadata) {
  const fields = [
    ["title", metadata.title],
    ["source_name", "IOHK Support"],
    ["source_platform", "Zendesk"],
    ["original_url", metadata.originalUrl],
    ["original_article_id", metadata.articleId],
    ["copyright_holder", "Input Output"],
    ["retrieved_at", metadata.retrievedAt],
    ["original_published_at", metadata.published],
    ["original_updated_at", metadata.updated],
    ["language", "en-us"],
    ["product", "Daedalus"],
    ["archive_status", "preserved-official-source"],
  ];
  return `---\n${fields
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}: ${yaml(value)}`)
    .join("\n")}\n---\n\n`;
}

export function localizeAssets(article, id) {
  const used = new Map();
  return article.assets.map((asset, index) => {
    const url = new URL(asset.originalUrl);
    let name = safeFilename(url.pathname, `asset-${index + 1}`);
    const count = used.get(name) || 0;
    used.set(name, count + 1);
    if (count)
      name = `${path.parse(name).name}-${count + 1}${path.parse(name).ext}`;
    const localPath = `assets/${id}/${name}`;
    if (asset.kind === "image")
      article.$(asset.element).attr("src", `../${localPath}`);
    else article.$(asset.element).attr("href", `../${localPath}`);
    return { ...asset, localPath };
  });
}
