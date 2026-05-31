import type { Metadata, ParserContext } from "../types";
import { parsers } from "../parsers";

export function extractMetadata(context: ParserContext): Metadata {
  return {
    url: context.pageUrl,
    html: parsers.html.parse(context),
    twitter: parsers.twitter.parse(context),
    openGraph: parsers.openGraph.parse(context),
  };
}
