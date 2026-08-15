import { setTimeout as sleep } from "node:timers/promises";
import { assertPublicDestination, validateRedirect } from "./urls.mjs";
import { LIMITS, USER_AGENT } from "./archive-config.mjs";

let lastRequest = 0;

export async function politeFetch(
  input,
  {
    kind = "primary",
    maxBytes,
    fetchImpl = fetch,
    lookup,
    delayMs = LIMITS.delayMs,
  } = {},
) {
  let current = input;
  for (let attempt = 0; attempt <= LIMITS.retries; attempt += 1) {
    await assertPublicDestination(current, lookup);
    const wait = Math.max(0, delayMs - (Date.now() - lastRequest));
    if (wait) await sleep(wait);
    lastRequest = Date.now();
    const response = await fetchImpl(current, {
      redirect: "manual",
      signal: AbortSignal.timeout(LIMITS.timeoutMs),
      headers: {
        "user-agent": USER_AGENT,
        accept: kind === "primary" ? "text/html,application/xhtml+xml" : "*/*",
      },
    });
    if ([301, 302, 303, 307, 308].includes(response.status)) {
      const location = response.headers.get("location");
      if (!location) throw new Error("Redirect omitted Location");
      current = validateRedirect(
        current,
        new URL(location, current).href,
        kind,
      ).href;
      continue;
    }
    if (
      [408, 429, 500, 502, 503, 504].includes(response.status) &&
      attempt < LIMITS.retries
    ) {
      await sleep(500 * 2 ** attempt);
      continue;
    }
    if (!response.ok) return { response, url: current };
    const declared = Number(response.headers.get("content-length"));
    if (maxBytes && Number.isFinite(declared) && declared > maxBytes)
      throw new Error(`Response exceeds ${maxBytes} bytes`);
    return { response, url: current };
  }
  throw new Error("Redirect or retry limit exceeded");
}

export async function boundedBody(response, maxBytes, encoding = "bytes") {
  const bytes = new Uint8Array(await response.arrayBuffer());
  if (bytes.byteLength > maxBytes)
    throw new Error(`Response exceeds ${maxBytes} bytes`);
  return encoding === "text" ? new TextDecoder().decode(bytes) : bytes;
}
