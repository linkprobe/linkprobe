import type {FetchHtmlResult, FetchHtmloptions} from "../types";

export async function fetchHtml(url: string, options: FetchHtmloptions): Promise<FetchHtmlResult> {
  const controller = new AbortController();

  const timeout = setTimeout(() => controller.abort(), options.timeout ?? 5000);

  const response = await fetch(url, {signal: controller.signal});

  clearTimeout(timeout);

  return {
    contentType: response.headers.get("content-type") ?? undefined,
    html: await response.text(),
    url: response.url,
  };
}
