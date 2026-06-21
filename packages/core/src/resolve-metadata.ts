import type {Metadata, MetadataSource, ResolveMetadataOptions, ResolvedMetadata} from "./types";

import {resolveField} from "./lib";

const DEFAULT_PRIORITY: MetadataSource[] = ["openGraph", "twitter", "html"];

export function resolveMetadata(
  metadata: Metadata,
  options?: ResolveMetadataOptions,
): ResolvedMetadata {
  return {
    canonicalUrl: metadata.html?.canonicalUrl,
    description: resolveField(
      metadata,
      "description",
      options?.descriptionPriority ?? DEFAULT_PRIORITY,
    ),
    favicon: metadata.html?.favicon,
    image: resolveField(metadata, "image", options?.imagePriority ?? DEFAULT_PRIORITY),
    siteName: metadata.openGraph?.siteName,
    title: resolveField(metadata, "title", options?.titlePriority ?? DEFAULT_PRIORITY),
  };
}
