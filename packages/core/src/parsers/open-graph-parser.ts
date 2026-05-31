import type {
  MetadataParser,
  OpenGraphMetadata,
  ParserContext,
} from "../types";
import { resolveUrl } from "../utils/resolve-url";

export class OpenGraphParser implements MetadataParser<OpenGraphMetadata> {
  parse(context: ParserContext): Partial<OpenGraphMetadata> {
    const { $, pageUrl } = context;

    return {
      title: $('meta[property="og:title"]').attr("content"),
      description: $('meta[property="og:description"]').attr("content"),
      image: resolveUrl(
        $('meta[property="og:image"]').attr("content") ?? "",
        pageUrl,
      ),
      siteName: $('meta[property="og:site_name"]').attr("content"),
      type: $('meta[property="og:type"]').attr("content"),
      locale: $('meta[property="og:locale"]').attr("content"),
    };
  }
}
