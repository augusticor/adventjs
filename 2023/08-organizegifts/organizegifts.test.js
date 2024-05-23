import { describe, expect, it } from "vitest";
import organizeGifts from "./organizegifts";

describe("Challenge 8 organize gifts in pales, boxes and bags", () => {
  it("Should return '[a]{a}{a}(aaaaaa){b}(b)' when input is '76a11b'", () => {
    expect(organizeGifts("76a11b")).toEqual("[a]{a}{a}(aaaaaa){b}(b)");
  });

  it("Should return '{a}{a}' when input is '20a'", () => {
    expect(organizeGifts("20a")).toEqual("{a}{a}");
  });

  it("Should return '[b]{b}{b}[a][a]{a}{a}(cccc)' when input is '70b120a4c'", () => {
    expect(organizeGifts("70b120a4c")).toEqual("[b]{b}{b}[a][a]{a}{a}(cccc)");
  });

  it("Should return '(ccccccccc)' when input is '9c'", () => {
    expect(organizeGifts("9c")).toEqual("(ccccccccc)");
  });

  it("Should return '{d}(ddddddddd)[e](e)' when input is '19d51e'", () => {
    expect(organizeGifts("19d51e")).toEqual("{d}(ddddddddd)[e](e)");
  });

  it("Should return '(a)' when input is '1a'", () => {
    expect(organizeGifts("1a")).toEqual("(a)");
  });

  it("Should return '' when input is ''", () => {
    expect(organizeGifts("")).toEqual("");
  });
});
