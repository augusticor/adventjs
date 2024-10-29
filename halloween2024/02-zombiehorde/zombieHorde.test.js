import { describe, expect, it } from "vitest";
import battleHorde from "./zombieHorde";

describe("Zombie Horde", () => {
  it("should win humans 2h with zombies '242' and humans '334'", () => {
    expect(battleHorde("242", "334")).toBe("2h");
  });

  it("should be a tie 'x' with zombies '444' and humans '282'", () => {
    expect(battleHorde("444", "282")).toBe("x");
  });

  it("should win zombies 2z with zombies '353' and humans '334'", () => {
    expect(battleHorde("353", "334")).toBe("1z");
  });
});
