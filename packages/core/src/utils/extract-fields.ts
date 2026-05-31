export function extractFields(source?: Record<string, unknown>): string[] {
  if (!source) {
    return [];
  }

  return Object.entries(source)
    .filter(
      ([, value]) => value !== undefined && value !== null && value !== "",
    )
    .map(([key]) => key);
}
