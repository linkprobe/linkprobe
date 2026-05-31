import type {Metadata, MetadataSource, ResolveMetadataOptions, ResolvedMetadata} from "./types";

const DEFAULT_PRIORITY: MetadataSource[] = ["openGraph", "twitter", "html"];

function resolveField<T extends keyof ResolvedMetadata>(
  metadata: Metadata,
  field: T,
  priority: MetadataSource[],
): ResolvedMetadata[T] {
  for (const source of priority) {
    const value = metadata[source]?.[field as keyof (typeof metadata)[typeof source]];

    if (value !== undefined && value !== null && value !== "") {
      return value as ResolvedMetadata[T];
    }
  }

  return undefined;
}

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
