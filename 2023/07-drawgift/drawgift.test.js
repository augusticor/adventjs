import { describe, expect, it } from "vitest";
import drawGift from "./drawgift";

describe("Challenge 7 draw 3d gift", () => {
  it("Should return expected cube with level is 4 and symbol +'", () => {
    const expectedCube =
      "   ####\n" +
      "  #++##\n" +
      " #++#+#\n" +
      "####++#\n" +
      "#++#+#\n" +
      "#++##\n" +
      "####\n";

    expect(drawGift(4, "+")).toBe(expectedCube);
  });

  it("Should return expected cube with level is 5 and symbol *'", () => {
    const expectedCube =
      "    #####\n" +
      "   #***##\n" +
      "  #***#*#\n" +
      " #***#**#\n" +
      "#####***#\n" +
      "#***#**#\n" +
      "#***#*#\n" +
      "#***##\n" +
      "#####\n";

    expect(drawGift(5, "*")).toBe(expectedCube);
  });

  it("Should return expected cube with level is 1 and symbol ^'", () => {
    const expectedCube = "#\n";

    expect(drawGift(1, "^")).toBe(expectedCube);
  });

  it("Should return expected cube with level is 2 and symbol &'", () => {
    const expectedCube = " ##\n" + "###\n" + "##\n";

    expect(drawGift(2, "&")).toBe(expectedCube);
  });

  it("Should return expected cube with level is 3 and symbol *'", () => {
    const expectedCube = "  ###\n" + " #*##\n" + "###*#\n" + "#*##\n" + "###\n";

    expect(drawGift(3, "*")).toBe(expectedCube);
  });

  it("Should return expected cube with level is 4 and symbol ' '", () => {
    const expectedCube =
      "   ####\n" +
      "  #  ##\n" +
      " #  # #\n" +
      "####  #\n" +
      "#  # #\n" +
      "#  ##\n" +
      "####\n";

    expect(drawGift(4, " ")).toBe(expectedCube);
  });
});
