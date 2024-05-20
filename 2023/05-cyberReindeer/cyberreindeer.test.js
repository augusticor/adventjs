import { describe, expect, it } from "vitest";
import cyberReindeer from "./cyberreindeer";

describe("Reto 5 cyber reindeer", () => {
  it("Road 'S..|...|..' and time 10", () => {
    expect(cyberReindeer("S..|...|..", 10)).toEqual([
      "S..|...|..", // estado inicial
      ".S.|...|..", // avanza el trineo la carretera
      "..S|...|..", // avanza el trineo la carretera
      "..S|...|..", // el trineo para en la barrera
      "..S|...|..", // el trineo para en la barrera
      "...S...*..", // se abre la barrera, el trineo avanza
      "...*S..*..", // avanza el trineo la carretera
      "...*.S.*..", // avanza el trineo la carretera
      "...*..S*..", // avanza el trineo la carretera
      "...*...S..", // avanza por la barrera abierta
    ]);
  });

  it("Road 'S.|.' and time 4", () => {
    expect(cyberReindeer("S.|.", 4)).toEqual(["S.|.", ".S|.", ".S|.", ".S|."]);
  });

  it("Road 'S.|.|.' and time 7", () => {
    expect(cyberReindeer("S.|.|.", 7)).toEqual([
      "S.|.|.",
      ".S|.|.",
      ".S|.|.",
      ".S|.|.",
      ".S|.|.",
      "..S.*.",
      "..*S*.",
    ]);
  });

  it("Road 'S.|..' and time 6", () => {
    expect(cyberReindeer("S.|..", 6)).toEqual([
      "S.|..",
      ".S|..",
      ".S|..",
      ".S|..",
      ".S|..",
      "..S..",
    ]);
  });

  it("Road 'S.|.|.|......|.||.........' and time 8", () => {
    expect(cyberReindeer("S.|.|.|......|.||.........", 8)).toEqual([
      "S.|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      ".S|.|.|......|.||.........",
      "..S.*.*......*.**.........",
      "..*S*.*......*.**.........",
      "..*.S.*......*.**.........",
    ]);
  });

  it("Road '' and time 5", () => {
    expect(cyberReindeer("", 5)).toEqual(["", "", "", "", ""]);
  });

  it("Road '..........S' and time 5", () => {
    expect(cyberReindeer("..........S", 5)).toEqual([
      "..........S",
      "..........S",
      "..........S",
      "..........S",
      "..........S",
    ]);
  });

  it("Road '.*S..........' and time 5", () => {
    expect(cyberReindeer(".*S..........", 5)).toEqual([
      ".*S..........",
      ".*.S.........",
      ".*..S........",
      ".*...S.......",
      ".*....S......",
    ]);
  });

  it("Road 'S|.....' and time 7", () => {
    expect(cyberReindeer("S|.....", 7)).toEqual([
      "S|.....",
      "S|.....",
      "S|.....",
      "S|.....",
      "S|.....",
      ".S.....",
      ".*S....",
    ]);
  });

  it("Road 'S*.....' and time 4", () => {
    expect(cyberReindeer("S*.....", 4)).toEqual([
      "S*.....",
      ".S.....",
      ".*S....",
      ".*.S...",
    ]);
  });

  it("Road '|S.|..' and time 7", () => {
    expect(cyberReindeer("|S.|..", 7)).toEqual([
      "|S.|..",
      "|.S|..",
      "|.S|..",
      "|.S|..",
      "|.S|..",
      "*..S..",
      "*..*S.",
    ]);
  });

  it("Road 'S....|||.' and time 8", () => {
    expect(cyberReindeer("S....|||.", 8)).toEqual([
      "S....|||.",
      ".S...|||.",
      "..S..|||.",
      "...S.|||.",
      "....S|||.",
      ".....S**.",
      ".....*S*.",
      ".....**S.",
    ]);
  });

  it("Road 'S....|||.' and time 9", () => {
    expect(cyberReindeer("S....|||.", 9)).toEqual([
      "S....|||.",
      ".S...|||.",
      "..S..|||.",
      "...S.|||.",
      "....S|||.",
      ".....S**.",
      ".....*S*.",
      ".....**S.",
      ".....***S",
    ]);
  });

  it("Road 'S....|.' and time 7", () => {
    expect(cyberReindeer("S....|.", 7)).toEqual([
      "S....|.",
      ".S...|.",
      "..S..|.",
      "...S.|.",
      "....S|.",
      ".....S.",
      ".....*S",
    ]);
  });

  it("Road 'S|....|..' and time 7", () => {
    expect(cyberReindeer("S|....|..", 7)).toEqual([
      "S|....|..",
      "S|....|..",
      "S|....|..",
      "S|....|..",
      "S|....|..",
      ".S....*..",
      ".*S...*..",
    ]);
  });
});
