import type {Metadata, ProbeDiagnostics} from "./types";

import {extractFields} from "./utils/extract-fields";

export function buildDiagnostics(metadata: Metadata): ProbeDiagnostics {
  const openGraphFields = extractFields(metadata.openGraph as Record<string, unknown>);
  const twitterFields = extractFields(metadata.twitter as Record<string, unknown>);
  const htmlFields = extractFields(metadata.html as Record<string, unknown>);

  return {
    html: {
      detected: htmlFields.length > 0,
      fields: htmlFields,
    },
    openGraph: {
      detected: openGraphFields.length > 0,
      fields: openGraphFields,
    },
    twitter: {
      detected: twitterFields.length > 0,
      fields: twitterFields,
    },
  };
}
