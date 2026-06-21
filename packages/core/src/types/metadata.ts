export interface OpenGraphMetadata {
  description?: string;
  image?: string;
  locale?: string;
  siteName?: string;
  title?: string;
  type?: string;
}

export interface TwitterMetadata {
  creator?: string;
  description?: string;
  image?: string;
  site?: string;
  title?: string;
}

export interface HtmlMetadata {
  canonicalUrl?: string;
  description?: string;
  favicon?: string;
  title?: string;
}

export interface Metadata {
  html?: HtmlMetadata;
  openGraph?: OpenGraphMetadata;
  twitter?: TwitterMetadata;
  url: string;
}
