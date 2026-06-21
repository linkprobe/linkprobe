export type MetadataSource = "html" | "openGraph" | "twitter";

export interface ResolveMetadataOptions {
  descriptionPriority?: MetadataSource[];
  imagePriority?: MetadataSource[];
  titlePriority?: MetadataSource[];
}

export interface ResolvedMetadata {
  canonicalUrl?: string;
  description?: string;
  favicon?: string;
  image?: string;
  siteName?: string;
  title?: string;
}
