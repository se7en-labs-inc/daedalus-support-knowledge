import * as cheerio from "cheerio";
import { LIMITS, SOURCE_ROOT } from "./archive-config.mjs";
import { boundedBody, politeFetch } from "./network.mjs";
import { canonicalArticleUrl, isArticleUrl, isNavigationUrl } from "./urls.mjs";

const DAEDALUS = /\bdaedalus\b/i;

export function linksFromDiscoveryPage(
  html,
  pageUrl,
  inDaedalusHierarchy = false,
) {
  const $ = cheerio.load(html, { scriptingEnabled: false });
  $("script,style,iframe").remove();
  const articles = [];
  const navigation = [];
  $("a[href]").each((_, element) => {
    let url;
    try {
      url = new URL($(element).attr("href"), pageUrl).href;
    } catch {
      return;
    }
    // On a mixed Help Center page, only the link itself or its nearest local
    // navigation item may establish Daedalus scope. A match elsewhere in the
    // page must never bless unrelated siblings.
    const localItem = $(element).closest("li").first();
    const localHierarchy = $(element)
      .closest(".section, .category, [data-section], [data-category]")
      .first();
    const hierarchyLabel = localHierarchy
      .find("h1, h2, h3, [data-title]")
      .first()
      .text();
    const context = `${$(element).text()} ${localItem.text()} ${hierarchyLabel}`;
    const locallyRelevant = DAEDALUS.test(context);
    const relevant = inDaedalusHierarchy || locallyRelevant;
    if (isArticleUrl(url) && relevant)
      articles.push({
        url: canonicalArticleUrl(url),
        discovered_from: pageUrl,
        selection_reason: locallyRelevant
          ? "Daedalus-labelled link context"
          : "Daedalus support hierarchy",
      });
    else if (isNavigationUrl(url) && (relevant || url === SOURCE_ROOT))
      navigation.push({ url: new URL(url).href, relevant });
  });
  return { articles, navigation };
}

export async function discover({
  startUrl = SOURCE_ROOT,
  fetcher = politeFetch,
} = {}) {
  const queue = [{ url: startUrl, relevant: false }];
  const visited = new Set();
  const found = new Map();
  while (
    queue.length &&
    visited.size < LIMITS.maxDiscoveryPages &&
    found.size < LIMITS.maxDiscoveredArticles
  ) {
    const current = queue.shift();
    if (visited.has(current.url)) continue;
    visited.add(current.url);
    const { response, url } = await fetcher(current.url, {
      kind: "primary",
      maxBytes: LIMITS.maxArticleBytes,
    });
    if (!response.ok)
      throw new Error(`Discovery returned HTTP ${response.status}`);
    const html = await boundedBody(response, LIMITS.maxArticleBytes, "text");
    const links = linksFromDiscoveryPage(html, url, current.relevant);
    for (const item of links.articles)
      if (!found.has(item.url)) found.set(item.url, item);
    for (const item of links.navigation)
      if (!visited.has(item.url)) queue.push(item);
  }
  const limitReached =
    (queue.length > 0 && visited.size >= LIMITS.maxDiscoveryPages) ||
    found.size >= LIMITS.maxDiscoveredArticles;
  return {
    articles: [...found.values()].sort((a, b) => a.url.localeCompare(b.url)),
    completed: !limitReached,
    pages_visited: visited.size,
    limit_reached: limitReached,
  };
}
