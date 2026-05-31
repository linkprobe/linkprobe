export type * from "./metadata";
export type * from "./parser";
export type * from "./probe";

export interface FetchHtmloptions {
  timeout?: number;
}

export interface FetchHtmlResult {
  url: string;
  html: string;
  contentType?: string;
}

export type MetadataSource = "openGraph" | "twitter" | "html";

export interface ResolveMetadataOptions {
  titlePriority?: MetadataSource[];
  descriptionPriority?: MetadataSource[];
  imagePriority?: MetadataSource[];
}

export interface ResolvedMetadata {
  title?: string;
  description?: string;
  image?: string;
  favicon?: string;
  siteName?: string;
  canonicalUrl?: string;
}

export interface MetadataCoverage {
  score: number;
  available: string[];
  missing: string[];
}

export interface CacheProvider {
  get<T>(key: string): Promise<T | null>;
  set<T>(key: string, value: T, ttl?: number): Promise<void>;
}
