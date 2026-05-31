export interface OpenGraphMetadata {
  title?: string;
  description?: string;
  image?: string;
  siteName?: string;
  type?: string;
  locale?: string;
}

export interface TwitterMetadata {
  title?: string;
  description?: string;
  image?: string;
  site?: string;
  creator?: string;
}

export interface HtmlMetadata {
  title?: string;
  description?: string;
  favicon?: string;
  canonicalUrl?: string;
}

export interface Metadata {
  url: string;
  openGraph?: OpenGraphMetadata;
  twitter?: TwitterMetadata;
  html?: HtmlMetadata;
}
