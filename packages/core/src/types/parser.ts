import type { CheerioAPI } from "cheerio";

export interface ParserContext {
  $: CheerioAPI;
  pageUrl: string;
}

export interface MetadataParser<T> {
  parse(context: ParserContext): Partial<T>;
}
