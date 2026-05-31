import type {Metadata, ParserContext} from "../types";

import {parsers} from "../parsers";

export function extractMetadata(context: ParserContext): Metadata {
  return {
    html: parsers.html.parse(context),
    openGraph: parsers.openGraph.parse(context),
    twitter: parsers.twitter.parse(context),
    url: context.pageUrl,
  };
}
