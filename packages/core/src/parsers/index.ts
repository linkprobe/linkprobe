import {HtmlMetaParser} from "./html-meta-parser";
import {OpenGraphParser} from "./open-graph-parser";
import {TwitterCardParser} from "./twitter-card-parser";

export const parsers = {
  html: new HtmlMetaParser(),
  openGraph: new OpenGraphParser(),
  twitter: new TwitterCardParser(),
};
