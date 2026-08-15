export const emptyManifest = () => ({
  schema_version: 1,
  generated_at: null,
  source_name: "IOHK Support",
  source_root: "https://iohk.zendesk.com/hc/en-us",
  article_count: 0,
  articles: [],
});

export function deterministicManifest(manifest, generatedAt) {
  const articles = [...(manifest.articles || [])]
    .map((article) => ({
      ...article,
      assets: [...(article.assets || [])].sort((a, b) =>
        a.local_path.localeCompare(b.local_path),
      ),
    }))
    .sort((a, b) =>
      String(a.article_id).localeCompare(String(b.article_id), "en", {
        numeric: true,
      }),
    );
  return {
    ...manifest,
    generated_at: generatedAt,
    article_count: articles.length,
    articles,
  };
}

export const serializeManifest = (manifest, generatedAt) =>
  `${JSON.stringify(deterministicManifest(manifest, generatedAt), null, 2)}\n`;

export function retainUnavailable(existing, discoveredIds) {
  return existing.map((article) =>
    discoveredIds.has(String(article.article_id))
      ? article
      : { ...article, source_status: "unavailable" },
  );
}
