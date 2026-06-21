import type {Metadata, MetadataCoverage} from "../types";

import {resolveMetadata} from "../resolve-metadata";

const REQUIRED_FIELDS = ["title", "description", "image", "favicon"] as const;

export function getMetadataCoverage(metadata: Metadata): MetadataCoverage {
  const resolved = resolveMetadata(metadata);
  const available = REQUIRED_FIELDS.filter((field) => resolved[field]);
  const missing = REQUIRED_FIELDS.filter((field) => !resolved[field]);

  return {
    available: [...available],
    missing: [...missing],
    score: Math.round((available.length / REQUIRED_FIELDS.length) * 100),
  };
}
