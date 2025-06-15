import { describe, expect, it } from "vitest";
import { pick, omit, hasField } from "../src/object";

describe("object utils", () => {
  const sample = { a: 1, b: 2, c: 3 };

  it("pick() returns only specified keys", () => {
    expect(pick(sample, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });

  it("omit() excludes specified keys", () => {
    expect(omit(sample, ["b"])).toEqual({ a: 1, c: 3 });
  });

  it("hasField() returns true when key exists", () => {
    expect(hasField < typeof sample, "b" > (sample, "b")).toBe(true);
  });
});
