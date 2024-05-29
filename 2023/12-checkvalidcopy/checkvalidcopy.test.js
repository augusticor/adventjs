import { describe, expect, it } from "vitest";
import checkIsValidCopy from "./checkvalidcopy";

describe("Challenge 12 check if is valid copy", () => {
  it("Should return true for input checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')", () => {
    expect(
      checkIsValidCopy("Santa Claus is coming", "sa#ta Cl#us i+ comin#")
    ).toBe(true);
  });

  it("Should return false for input checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')", () => {
    expect(
      checkIsValidCopy("Santa Claus is coming", "p#nt: cla#s #s c+min#")
    ).toBe(false);
  });

  it("Should return false for input checkIsValidCopy('Santa Claus', ' Santa Claus ')", () => {
    expect(checkIsValidCopy("Santa Claus", " Santa Claus ")).toBe(false);
  });

  it("Should return true for input checkIsValidCopy('Santa Claus', '###:. c:+##')", () => {
    expect(checkIsValidCopy("Santa Claus", "###:. c:+##")).toBe(true);
  });

  it("Should return false for input checkIsValidCopy('Santa Claus', 'sant##claus+')", () => {
    expect(checkIsValidCopy("Santa Claus", "sant##claus+")).toBe(false);
  });

  it("Should return true for input checkIsValidCopy('Santa Claus', 's#+:. c:. s')", () => {
    expect(checkIsValidCopy("Santa Claus", "s#+:. c:. s")).toBe(true);
  });

  it("Should return false for input checkIsValidCopy('Santa Claus', 's#+:.#c:. s')", () => {
    // El numeral remplazo un espacio
    expect(checkIsValidCopy("Santa Claus", "s#+:.#c:. s")).toBe(false);
  });

  it("Should return false for input checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')", () => {
    expect(
      checkIsValidCopy("s#nta Cla#s is coming", "p#nt: cla#s #s c+min#")
    ).toBe(false);
  });

  it("Should return false for input checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')", () => {
    expect(checkIsValidCopy("s+#:.#c:. s", "s#+:.#c:. s")).toBe(false);
  });

  it("Should return false for input checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')", () => {
    expect(checkIsValidCopy("S#nta Claus", "S#ntA ClauS")).toBe(false);
  });

  it("Should return true for input checkIsValidCopy('3 #egalos', '3 .+:# #:')", () => {
    expect(checkIsValidCopy("3 #egalos", "3 .+:# #:")).toBe(true);
  });

  it("Should return true for input checkIsValidCopy('3 regalos', '3        ')", () => {
    expect(checkIsValidCopy("3 regalos", "3        ")).toBe(true);
  });

  it("Should return true for input checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')", () => {
    expect(checkIsValidCopy("3 regalos 3", "3 .+:# #: 3")).toBe(true);
  });

  it("Should return true for input checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')", () => {
    expect(checkIsValidCopy("3 regalos 3", "3 .+:# #: 3")).toBe(true);
  });

  it("Should return false for long input different strings", () => {
    expect(
      checkIsValidCopy(
        "Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños",
        "Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño"
      )
    ).toBe(false);
  });
});
