import type {ParserContext, ProbeOptions, ProbeResult} from "./types";

import {load} from "cheerio";

import {extractMetadata} from "./extractors";
import {fetchHtml} from "./fetchers";
import {buildDiagnostics, getMetadataCoverage} from "./lib";

export async function probe(url: string, options?: ProbeOptions): Promise<ProbeResult> {
  try {
    const page = await fetchHtml(url, {timeout: options?.timeout});

    const $ = load(page.html);
    const pageUrl = page.url;

    const context: ParserContext = {$, pageUrl};

    const metadata = extractMetadata(context);
    const diagnostics = buildDiagnostics(metadata);
    const coverage = getMetadataCoverage(metadata);

    return {
      coverage,
      diagnostics,
      metadata,
      page: {
        contentType: page.contentType,
        finalUrl: page.url,
        requestedUrl: url,
      },
      status: "success",
    };
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError")
      return {
        error: {
          code: "TIMEOUT",
          message: "Request timed out",
        },
        status: "failed",
      };

    if (error instanceof TypeError)
      return {
        error: {
          code: "FETCH_FAILED",
          message: error.message,
        },
        status: "failed",
      };

    return {
      error: {
        code: "UNKNOWN_ERROR",
        message: "Unknown error",
      },
      status: "failed",
    };
  }
}
