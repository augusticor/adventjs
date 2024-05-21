import { describe, expect, it } from "vitest";
import maxDistance from "./maxdistance";

describe("Reto 6 los renos a prueba", () => {
  it("Should return 2 when input is '>>*<'", () => {
    expect(maxDistance(">>*<")).toEqual(2);
  });

  it("Should return 2 when input is '<<<>'", () => {
    expect(maxDistance("<<<>")).toEqual(2);
  });

  it("Should return 5 when input is '>***>'", () => {
    expect(maxDistance(">***>")).toEqual(5);
  });

  it("Should return 5 when input is '<<<<<'", () => {
    expect(maxDistance("<<<<<")).toEqual(5);
  });

  it("Should return 5 when input is '>***>'", () => {
    expect(maxDistance(">***>")).toEqual(5);
  });

  it("Should return 5 when input is '**********'", () => {
    expect(maxDistance("**********")).toEqual(10);
  });

  it("Should return 5 when input is '<<**>>'", () => {
    expect(maxDistance("<<**>>")).toEqual(2);
  });

  it("Should return 0 when input is ''", () => {
    expect(maxDistance("")).toEqual(0);
  });

  it("Should return 0 when input is '><><'", () => {
    expect(maxDistance("><><")).toEqual(0);
  });

  it("Should return 8 when input is '*<<<<*><<<'", () => {
    expect(maxDistance("*<<<<*><<<")).toEqual(8);
  });
});
