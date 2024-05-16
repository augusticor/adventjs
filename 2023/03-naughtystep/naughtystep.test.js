import { describe, expect, it } from "vitest";
import findNaughtyStep from "./naughtystep";

describe("Reto 3 naughty step duende travieso", () => {
  it("Should return e with original abcd and modified abcde", () => {
    const original = "abcd";
    const modified = "abcde";
    expect(findNaughtyStep(original, modified)).toBe("e");
  });

  it("Should return f with original stepfor and modified stepor", () => {
    const original = "stepfor";
    const modified = "stepor";
    expect(findNaughtyStep(original, modified)).toBe("f");
  });

  it("Should return '' with original abcde and modified abcde", () => {
    const original = "abcde";
    const modified = "abcde";
    expect(findNaughtyStep(original, modified)).toBe("");
  });

  it("Should return e with original abcde and modified abcd", () => {
    const original = "abcde";
    const modified = "abcd";
    expect(findNaughtyStep(original, modified)).toBe("e");
  });
});
