export const SOURCE_ROOT = "https://iohk.zendesk.com/hc/en-us";
export const USER_AGENT =
  "SE7EN-Labs-Daedalus-Preservation/1.0 (+https://github.com/se7en-labs-inc/daedalus-support-knowledge)";

export const LIMITS = Object.freeze({
  maxArticleBytes: 5 * 1024 * 1024,
  maxAssetBytes: 25 * 1024 * 1024,
  maxAssetsPerArticle: 50,
  maxDiscoveredArticles: 1_000,
  maxDiscoveryPages: 250,
  timeoutMs: 20_000,
  delayMs: 350,
  retries: 2,
});
