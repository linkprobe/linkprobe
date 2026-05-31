import {describe, expect, it} from "vitest";

import {probe} from "../src/probe";

describe("GitHub", () => {
  it("should extract metadata", async () => {
    const result = await probe("https://github.com");

    expect(result.status).toBe("success");

    if (result.status === "success") {
      expect(result.metadata.openGraph?.title).toBeDefined();
    }
  });
});
