import { describe, it, expect } from "vitest";
import { CalcWorkTime } from "./CalcWorkTime";

describe("CulcWorkTime", () => {
  it("正しく時間計算ができること", () => {
    const result = CalcWorkTime("17:50", "23:20");
    expect(result).toBe("5:30");
  });
  it("細かい時間でも正しく計算できること", () => {
    const result = CalcWorkTime("09:15", "17:55");
    expect(result).toBe("8:40");
  });
  // it("日を跨いでいる場合も正しく時間計算ができること", () => {
  //   const result = CalcWorkTime("22:00", "06:00");
  //   expect(result).toBe("8:00");
  // });
  it("開始時間と終了時間が同じ場合は0時間になること", () => {
    const result = CalcWorkTime("09:00", "09:00");
    expect(result).toBe("0:00");
  });
});
