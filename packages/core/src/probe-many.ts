import type { ProbeOptions, ProbeResult } from "./types";

import { probe } from "./probe";

export async function probeMany(
  urls: string[],
  options?: ProbeOptions,
): Promise<ProbeResult[]> {
  return Promise.all(urls.map((url) => probe(url, options)));
}
