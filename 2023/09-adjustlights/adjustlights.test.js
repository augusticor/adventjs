import { describe, expect, it } from "vitest";
import adjustLights from "./adjustlights";

describe("Challenge 09 adjust lights", () => {
  it("Should return 1 when input is ['🟢', '🔴', '🟢', '🟢', '🟢']", () => {
    expect(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"])).toBe(1);
  });

  it("Should return 1 when input is ['🔴', '🔴', '🟢', '🔴', '🟢']", () => {
    expect(adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])).toBe(1);
  });

  it("Should return 2 when input is ['🔴', '🔴', '🟢', '🟢', '🔴']", () => {
    expect(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"])).toBe(2);
  });

  it("Should return 0 when input is ['🟢', '🔴', '🟢', '🔴', '🟢']", () => {
    expect(adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"])).toBe(0);
  });

  it("Should return 1 when input is ['🔴', '🔴', '🔴']", () => {
    expect(adjustLights(["🔴", "🔴", "🔴"])).toBe(1);
  });

  it("Should return 0 when input is ['🔴', '🟢', '🔴']", () => {
    expect(adjustLights(["🔴", "🟢", "🔴"])).toBe(0);
  });

  it("Should return 1 when input is ['🔴', '🟢', '🔴', '🟢']", () => {
    expect(adjustLights(["🔴", "🟢", "🔴", "🟢"])).toBe(0);
  });

  it("Should return 0 when input is ['🔴', '🔴', '🔴', '🔴']", () => {
    expect(adjustLights(["🔴", "🔴", "🔴", "🔴"])).toBe(2);
  });

  it("Should return 0 when input is []", () => {
    expect(adjustLights([])).toBe(0);
  });

  it("Should return 0 when input is ['🔴']", () => {
    expect(adjustLights(["🔴"])).toBe(0);
  });

  it("Should return 1 when input is ['🔴', '🔴', '🟢']", () => {
    expect(adjustLights(["🔴", "🔴", "🟢"])).toBe(1);
  });

  it("Should return 1 when input is ['🟢', '🔴', '🔴']", () => {
    expect(adjustLights(["🟢", "🔴", "🔴"])).toBe(1);
  });
});
