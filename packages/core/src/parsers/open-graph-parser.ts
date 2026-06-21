import type {MetadataParser, OpenGraphMetadata, ParserContext} from "../types";

import {resolveUrl} from "../utils";

export class OpenGraphParser implements MetadataParser<OpenGraphMetadata> {
  parse(context: ParserContext): Partial<OpenGraphMetadata> {
    const {$, pageUrl} = context;

    return {
      description: $('meta[property="og:description"]').attr("content"),
      image: resolveUrl($('meta[property="og:image"]').attr("content") ?? "", pageUrl),
      locale: $('meta[property="og:locale"]').attr("content"),
      siteName: $('meta[property="og:site_name"]').attr("content"),
      title: $('meta[property="og:title"]').attr("content"),
      type: $('meta[property="og:type"]').attr("content"),
    };
  }
}
