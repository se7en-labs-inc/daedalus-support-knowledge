#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { discover } from "./lib/discovery.mjs";
import { archiveOne } from "./lib/archive.mjs";
import {
  emptyManifest,
  retainUnavailable,
  serializeManifest,
} from "./lib/manifest.mjs";

const defaultNow = () => new Date().toISOString();
const readJson = async (root, name, fallback) => {
  try {
    return JSON.parse(await fs.readFile(path.join(root, name), "utf8"));
  } catch (error) {
    if (error.code === "ENOENT") return fallback;
    throw error;
  }
};
const writeJson = (root, name, value) =>
  fs.writeFile(path.join(root, name), `${JSON.stringify(value, null, 2)}\n`);

export async function runDiscover({
  root = process.cwd(),
  discoverArticles = discover,
  log = console.log,
} = {}) {
  const result = await discoverArticles();
  const output = {
    schema_version: 1,
    source_root: "https://iohk.zendesk.com/hc/en-us",
    completed: result.completed,
    pages_visited: result.pages_visited,
    limit_reached: result.limit_reached,
    articles: result.articles,
  };
  await writeJson(root, "discovered-articles.json", output);
  log(`Daedalus articles discovered: ${result.articles.length}`);
  return output;
}

export async function runFetch({
  root = process.cwd(),
  archiveArticle = archiveOne,
  now = defaultNow,
  log = console.log,
} = {}) {
  const discovery = await readJson(root, "discovered-articles.json", null);
  if (!discovery || !Array.isArray(discovery.articles))
    throw new Error("Run archive:discover before archive:fetch");
  const manifest = await readJson(root, "manifest.json", emptyManifest());
  const byId = new Map(
    manifest.articles.map((article) => [String(article.article_id), article]),
  );
  const report = {
    discovered: discovery.articles.length,
    archived: 0,
    unchanged: 0,
    updated: 0,
    failed: [],
    assets_downloaded: 0,
    assets_failed: 0,
  };
  const discoveredIds = new Set();
  for (const candidate of discovery.articles) {
    let id = candidate.url.match(/\/articles\/(\d+)/)?.[1];
    if (id) discoveredIds.add(id);
    try {
      const result = await archiveArticle({
        url: candidate.url,
        root,
        existing: byId.get(id),
        now,
      });
      if (result.article) byId.set(id, result.article);
      if (result.outcome === "unavailable")
        report.failed.push({
          article_id: id,
          url: candidate.url,
          reason: "source unavailable",
        });
      else {
        report[result.outcome] += 1;
        report.assets_downloaded += result.assetsDownloaded || 0;
      }
    } catch (error) {
      report.assets_downloaded += error?.assetsDownloaded || 0;
      if (error?.name === "AssetArchiveError") report.assets_failed += 1;
      report.failed.push({
        article_id: id || null,
        url: candidate.url,
        reason: error instanceof Error ? error.message : "unknown failure",
      });
    }
  }
  if (discovery.completed === true) {
    for (const article of retainUnavailable([...byId.values()], discoveredIds))
      byId.set(String(article.article_id), article);
  }
  manifest.articles = [...byId.values()];
  await fs.writeFile(
    path.join(root, "manifest.json"),
    serializeManifest(manifest, now()),
  );
  await writeJson(root, "archive-report.json", report);
  log(JSON.stringify(report, null, 2));
  return { manifest, report };
}

async function main() {
  const command = process.argv[2] || "all";
  if (!["discover", "fetch", "all"].includes(command))
    throw new Error("Usage: archive-daedalus-support.mjs [discover|fetch|all]");
  if (command === "discover" || command === "all") await runDiscover();
  if (command === "fetch" || command === "all") {
    const { report } = await runFetch();
    if (report.failed.length) process.exitCode = 1;
  }
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) await main();
