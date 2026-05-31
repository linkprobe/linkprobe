import type {MetadataParser, ParserContext, TwitterMetadata} from "../types";

import {resolveUrl} from "../utils/resolve-url";

export class TwitterCardParser implements MetadataParser<TwitterMetadata> {
  parse(context: ParserContext): Partial<TwitterMetadata> {
    const {$, pageUrl} = context;

    return {
      creator: $('meta[name="twitter:creator"]').attr("content"),
      description: $('meta[name="twitter:description"]').attr("content"),
      image: resolveUrl($('meta[name="twitter:image"]').attr("content") ?? "", pageUrl),
      site: $('meta[name="twitter:site"]').attr("content"),
      title: $('meta[name="twitter:title"]').attr("content"),
    };
  }
}
