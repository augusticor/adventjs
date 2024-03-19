import { expect, describe, it } from "vitest";
import findFirstRepeated from "./repeatedGift";

describe("repeatedGift", () => {
  it("Should return 3 with [2, 1, 3, 5, 3, 2]", () => {
    const gifts = [2, 1, 3, 5, 3, 2];
    expect(findFirstRepeated(gifts)).toBe(3);
  });

  it("Should return -1 with [1, 2, 3, 4]", () => {
    const gifts = [1, 2, 3, 4];
    expect(findFirstRepeated(gifts)).toBe(-1);
  });

  it("Should return 5 with [5, 1, 5, 1]", () => {
    const gifts = [5, 1, 5, 1];
    expect(findFirstRepeated(gifts)).toBe(5);
  });
});
