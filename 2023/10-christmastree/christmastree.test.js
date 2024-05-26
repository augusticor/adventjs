import { describe, expect, it } from "vitest";
import createChristmasTree from "./christmastree";

describe("Challenge 10 personalized christmas tree", () => {
  it("Should return expect tree with createChristmasTree('123', 4)", () => {
    expect(createChristmasTree("123", 4)).toBe(
      "   1\n" + "  2 3\n" + " 1 2 3\n" + "1 2 3 1\n" + "   |\n"
    );
  });

  it("Should return expect tree with createChristmasTree('*@o', 3)", () => {
    expect(createChristmasTree("*@o", 3)).toBe(
      "  *\n" + " @ o\n" + "* @ o\n" + "  |\n"
    );
  });

  it("Should return expect tree with createChristmasTree('x', 3)", () => {
    expect(createChristmasTree("x", 3)).toBe(
      "  x\n" + " x x\n" + "x x x\n" + "  |\n"
    );
  });

  it("Should return expect tree with createChristmasTree('xo', 4)", () => {
    expect(createChristmasTree("xo", 4)).toBe(
      "   x\n" + "  o x\n" + " o x o\n" + "x o x o\n" + "   |\n"
    );
  });

  it("Should return expect tree with createChristmasTree('123', 5)", () => {
    expect(createChristmasTree("123", 5)).toBe(
      "    1\n" +
        "   2 3\n" +
        "  1 2 3\n" +
        " 1 2 3 1\n" +
        "2 3 1 2 3\n" +
        "    |\n"
    );
  });

  it("Should return expect tree with createChristmasTree(' ', 3)", () => {
    expect(createChristmasTree(" ", 3)).toBe(
      "   \n" + "    \n" + "     \n" + "  " + "|\n"
    );
  });

  it("Should return expect tree with createChristmasTree('x', 0)", () => {
    expect(createChristmasTree("x", 0)).toBe("|\n");
  });

  it("Should return expect tree with createChristmasTree('123', 1)", () => {
    expect(createChristmasTree("123", 1)).toBe("1\n" + "|\n");
  });

  it("Should return expect tree with createChristmasTree('123', 2)", () => {
    expect(createChristmasTree("123", 2)).toBe(" 1\n" + "2 3\n" + " |\n");
  });

  it("Should return expect tree with createChristmasTree('abcdef', 5)", () => {
    expect(createChristmasTree("abcdef", 5)).toBe(
      "    a\n" +
        "   b c\n" +
        "  d e f\n" +
        " a b c d\n" +
        "e f a b c\n" +
        "    |\n"
    );
  });

  it("Should return expect tree with createChristmasTree('* *', 3)", () => {
    expect(createChristmasTree("* *", 3)).toBe(
      "  *\n" + "   *\n" + "*   *\n" + "  |\n"
    );
  });

  it("Should return expected tree with createChristmasTree('!@#', 3)", () => {
    expect(createChristmasTree("!@#", 3)).toBe(
      "  !\n" + " @ #\n" + "! @ #\n" + "  |\n"
    );
  });

  it("Should return expected tree with createChristmasTree('!@#abcdefghijqlmnopqrstuvwxyz1234567890?&', 20)", () => {
    expect(
      createChristmasTree("!@#abcdefghijqlmnopqrstuvwxyz1234567890?&", 20)
    ).toBe(
      "                   !\n" +
        "                  @ #\n" +
        "                 a b c\n" +
        "                d e f g\n" +
        "               h i j q l\n" +
        "              m n o p q r\n" +
        "             s t u v w x y\n" +
        "            z 1 2 3 4 5 6 7\n" +
        "           8 9 0 ? & ! @ # a\n" +
        "          b c d e f g h i j q\n" +
        "         l m n o p q r s t u v\n" +
        "        w x y z 1 2 3 4 5 6 7 8\n" +
        "       9 0 ? & ! @ # a b c d e f\n" +
        "      g h i j q l m n o p q r s t\n" +
        "     u v w x y z 1 2 3 4 5 6 7 8 9\n" +
        "    0 ? & ! @ # a b c d e f g h i j\n" +
        "   q l m n o p q r s t u v w x y z 1\n" +
        "  2 3 4 5 6 7 8 9 0 ? & ! @ # a b c d\n" +
        " e f g h i j q l m n o p q r s t u v w\n" +
        "x y z 1 2 3 4 5 6 7 8 9 0 ? & ! @ # a b\n" +
        "                   |\n"
    );
  });

  it("Should return expected tree with createChristmasTree('12345678', 10)", () => {
    expect(createChristmasTree("12345678", 10)).toBe(
        "         1\n" +
        "        2 3\n" +
        "       4 5 6\n" +
        "      7 8 1 2\n" +
        "     3 4 5 6 7\n" +
        "    8 1 2 3 4 5\n" +
        "   6 7 8 1 2 3 4\n" +
        "  5 6 7 8 1 2 3 4\n" +
        " 5 6 7 8 1 2 3 4 5\n" +
        "6 7 8 1 2 3 4 5 6 7\n" +
        "         |\n"
    );
  });
});
