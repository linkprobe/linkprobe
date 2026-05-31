import type {HtmlMetadata, MetadataParser, ParserContext} from "../types";

import {resolveUrl} from "../utils/resolve-url";

export class HtmlMetaParser implements MetadataParser<HtmlMetadata> {
  parse(context: ParserContext): Partial<HtmlMetadata> {
    const {$, pageUrl} = context;

    return {
      canonicalUrl: $('link[rel="canonical"]').attr("href"),
      description: $('meta[name="description"]').attr("content"),
      favicon: resolveUrl(
        $('link[rel="icon"]').attr("href") ??
          $('link[rel="shortcut icon"]').attr("href") ??
          $('link[rel="apple-touch-icon"]').attr("href") ??
          "/favicon.ico",
        pageUrl,
      ),
      title: $("title").text(),
    };
  }
}
