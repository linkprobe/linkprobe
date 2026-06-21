import type {Metadata, MetadataSource, ResolvedMetadata} from "../types";

export function resolveField<T extends keyof ResolvedMetadata>(
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
