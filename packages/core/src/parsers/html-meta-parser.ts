import type { HtmlMetadata, MetadataParser, ParserContext } from "../types";
import { resolveUrl } from "../utils/resolve-url";

export class HtmlMetaParser implements MetadataParser<HtmlMetadata> {
  parse(context: ParserContext): Partial<HtmlMetadata> {
    const { $, pageUrl } = context;

    return {
      title: $("title").text(),
      description: $('meta[name="description"]').attr("content"),
      canonicalUrl: $('link[rel="canonical"]').attr("href"),
      favicon: resolveUrl(
        $('link[rel="icon"]').attr("href") ??
          $('link[rel="shortcut icon"]').attr("href") ??
          $('link[rel="apple-touch-icon"]').attr("href") ??
          "/favicon.ico",
        pageUrl,
      ),
    };
  }
}
