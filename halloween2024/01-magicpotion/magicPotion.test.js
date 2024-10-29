import { describe, expect, it } from "vitest";
import createMagicPotion from "./magicPotion";

describe("Challenge 1 magic potion power", () => {
  it("Should return [2, 3] with potions [4, 5, 6, 2] and goal 8)'", () => {
    expect(createMagicPotion([4, 5, 6, 2], 8)).toEqual([2, 3]);
  });

  it("Should return undefined with potions [1, 2, 3, 4] and goal 9)'", () => {
    expect(createMagicPotion([1, 2, 3, 4], 9)).toBeUndefined();
  });

  it("Should return [1, 2] with potions [1, 2, 3, 4] and goal 5)'", () => {
    expect(createMagicPotion([1, 2, 3, 4], 5)).toEqual([1, 2]);
  });

  it("Should return [0, 3] with potions [-1, 2, -3, 6] and goal 5)'", () => {
    expect(createMagicPotion([-1, 2, -3, 6], 5)).toEqual([0, 3]);
  });

  it("Should return [0, 2] with potions [2, 3, 4, 5] and goal 7)'", () => {
    expect(createMagicPotion([2, 3, 4, 5], 7)).toEqual([1, 2]);
  });

  it("Should return undefined with potions [1, 1, 1, 1] and goal 3)'", () => {
    expect(createMagicPotion([1, 1, 1, 1], 3)).toBeUndefined();
  });

  it("Should return [0, 2] with potions [4, 3, 2, 3, 4] and goal 6)'", () => {
    expect(createMagicPotion([4, 3, 2, 3, 4], 6)).toEqual([0, 2]);
  });
});
