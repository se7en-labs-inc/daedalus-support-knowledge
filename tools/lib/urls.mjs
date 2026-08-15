import dns from "node:dns/promises";
import net from "node:net";

const PRIMARY_HOST = "iohk.zendesk.com";
const ARTICLE_PATH = /^\/hc\/en-us\/articles\/(\d+)(?:-[^/?#]*)?\/?$/;
const NAV_PATH = /^\/hc\/en-us(?:\/|$)/;

export function parseHttpUrl(value) {
  const url = new URL(value);
  if (url.protocol !== "https:" || url.username || url.password || url.port) {
    throw new Error(`Rejected URL: ${url.href}`);
  }
  if (url.hostname === "localhost" || net.isIP(url.hostname)) {
    throw new Error(`Rejected host: ${url.hostname}`);
  }
  return url;
}

export function articleId(value) {
  const url = parseHttpUrl(value);
  if (url.hostname !== PRIMARY_HOST)
    throw new Error("Article host is not allowlisted");
  const match = url.pathname.match(ARTICLE_PATH);
  if (!match) throw new Error("Not an allowlisted article URL");
  return match[1];
}

export function isArticleUrl(value) {
  try {
    articleId(value);
    return true;
  } catch {
    return false;
  }
}

export function isNavigationUrl(value) {
  try {
    const url = parseHttpUrl(value);
    return (
      url.hostname === PRIMARY_HOST &&
      NAV_PATH.test(url.pathname) &&
      !url.pathname.includes("/api/")
    );
  } catch {
    return false;
  }
}

export function validateRedirect(from, to, kind = "primary") {
  const source = parseHttpUrl(from);
  const destination = parseHttpUrl(to);
  if (kind === "primary") {
    if (
      destination.hostname !== PRIMARY_HOST ||
      !NAV_PATH.test(destination.pathname)
    ) {
      throw new Error("Redirect escaped the support allowlist");
    }
  } else if (
    destination.hostname !== source.hostname &&
    destination.hostname !== PRIMARY_HOST
  ) {
    throw new Error("Asset redirect changed to an unrelated host");
  }
  return destination;
}

function isPrivate(address) {
  if (net.isIPv4(address)) {
    const [a, b] = address.split(".").map(Number);
    return (
      a === 10 ||
      a === 127 ||
      a === 0 ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 168)
    );
  }
  const v = address.toLowerCase();
  return (
    v === "::1" ||
    v === "::" ||
    v.startsWith("fc") ||
    v.startsWith("fd") ||
    v.startsWith("fe8") ||
    v.startsWith("fe9") ||
    v.startsWith("fea") ||
    v.startsWith("feb")
  );
}

export async function assertPublicDestination(url, lookup = dns.lookup) {
  const parsed = parseHttpUrl(url);
  const results = await lookup(parsed.hostname, { all: true, verbatim: true });
  if (!results.length || results.some(({ address }) => isPrivate(address))) {
    throw new Error("Destination resolves to a private or unavailable address");
  }
  return parsed;
}

export function canonicalArticleUrl(value) {
  const url = parseHttpUrl(value);
  const id = articleId(url.href);
  return `https://${PRIMARY_HOST}/hc/en-us/articles/${id}`;
}
