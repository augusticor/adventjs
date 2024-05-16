import { describe, expect, it } from "vitest";
import manufacture from "./manufacture";

describe("manufacture", () => {
  it("Should return ['tren', 'oso'] with ['tren', 'oso', 'pelota'] and 'tronesa'", () => {
    const gifts = ["tren", "oso", "pelota"];
    const materials = "tronesa";
    expect(manufacture(gifts, materials)).toEqual(["tren", "oso"]);
  });

  it("Should return ['puzzle'] with ['juego', 'puzzle'] and 'jlepuz'", () => {
    const gifts = ["juego", "puzzle"];
    const materials = "jlepuz";
    expect(manufacture(gifts, materials)).toEqual(["puzzle"]);
  });

  it("Should return [] with ['libro', 'ps5'] and 'psli'", () => {
    const gifts = ["libro", "ps5"];
    const materials = "psli";
    expect(manufacture(gifts, materials)).toEqual([]);
  });

  it("Should return ['carro', 'oso'] with ['carro', 'oso', 'pelota'] and 'carroso'", () => {
    const gifts = ["carro", "oso", "pelota"];
    const materials = "carroso";
    expect(manufacture(gifts, materials)).toEqual(["carro", "oso"]);
  });

  it("Should return [] with [] and 'letras'", () => {
    expect(manufacture([], "letras")).toEqual([]);
  });
});
