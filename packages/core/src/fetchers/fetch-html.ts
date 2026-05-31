import type { FetchHtmloptions, FetchHtmlResult } from "../types";

export async function fetchHtml(
  url: string,
  options: FetchHtmloptions,
): Promise<FetchHtmlResult> {
  const controller = new AbortController();

  const timeout = setTimeout(() => controller.abort(), options.timeout ?? 5000);

  const response = await fetch(url, { signal: controller.signal });

  clearTimeout(timeout);

  return {
    url: response.url,
    html: await response.text(),
    contentType: response.headers.get("content-type") ?? undefined,
  };
}
