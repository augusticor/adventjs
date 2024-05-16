import { describe, expect, it } from "vitest";
import decodeParentesis from "./decode";

describe("Reto 4 decode parentesis", () => {
  it("Should return 'hola mundo' when input is 'hola (odnum)'", () => {
    expect(decodeParentesis("hola (odnum)")).toBe("hola mundo");
  });

  it("Should return 'hello world!' when input is '(olleh) (dlrow)!'", () => {
    expect(decodeParentesis("(olleh) (dlrow)!")).toBe("hello world!");
  });

  it("Should return 'santaclaus' when input is 'sa(u(cla)atn)s'", () => {
    expect(decodeParentesis("sa(u(cla)atn)s")).toBe("santaclaus");
  });

  it("Should return 'santa' when input is '((nta)(sa))'", () => {
    expect(decodeParentesis("((nta)(sa))")).toBe("santa");
  });
});
