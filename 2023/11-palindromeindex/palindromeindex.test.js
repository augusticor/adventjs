import { describe, expect, it } from "vitest";
import getIndexsForPalindrome from "./palindromeindex";

describe("Challenge 11 get index for palindrome", () => {
  it("Should return [] when word is anna", () => {
    expect(getIndexsForPalindrome("anna")).toEqual([]);
  });

  it("Should return [0, 1] when word is abab", () => {
    expect(getIndexsForPalindrome("abab")).toEqual([0, 1]);
  });

  it("Should return null when word is abac", () => {
    expect(getIndexsForPalindrome("abac")).toBeNull();
  });

  it("Should return [] when word is aaaaaaaa", () => {
    expect(getIndexsForPalindrome("aaaaaaaa")).toEqual([]);
  });

  it("Should return [1, 3] when word is aaababa", () => {
    expect(getIndexsForPalindrome("aaababa")).toEqual([1, 3]);
  });

  it("Should return null when word is caababa", () => {
    expect(getIndexsForPalindrome("caababa")).toBeNull();
  });
});
