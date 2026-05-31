import type { ParserContext, ProbeOptions, ProbeResult } from "./types";
import { load } from "cheerio";
import { buildDiagnostics } from "./build-diagnostics";
import { extractMetadata } from "./extractors/extract-metadata";
import { fetchHtml } from "./fetchers/fetch-html";

export async function probe(
  url: string,
  options?: ProbeOptions,
): Promise<ProbeResult> {
  try {
    const page = await fetchHtml(url, { timeout: options?.timeout });

    const $ = load(page.html);
    const pageUrl = page.url;

    const context: ParserContext = { $, pageUrl };

    const metadata = extractMetadata(context);
    const diagnostics = buildDiagnostics(metadata);

    return {
      status: "success",
      metadata,
      diagnostics,
      page: {
        requestedUrl: url,
        finalUrl: page.url,
        contentType: page.contentType,
      },
    };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError")
      return {
        status: "failed",
        error: {
          code: "TIMEOUT",
          message: "Request timed out",
        },
      };

    if (error instanceof TypeError)
      return {
        status: "failed",
        error: {
          code: "FETCH_FAILED",
          message: error.message,
        },
      };

    return {
      status: "failed",
      error: {
        code: "UNKNOWN_ERROR",
        message: "Unknown error",
      },
    };
  }
}
