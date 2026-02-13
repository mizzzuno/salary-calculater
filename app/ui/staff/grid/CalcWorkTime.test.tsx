import { describe, it, expect } from "vitest";
import { CalcWorkTime } from "./CalcWorkTime";

describe("CulcWorkTime", () => {
  it("正しく時間計算ができること", () => {
    const result = CalcWorkTime("17:50", "23:20");
    expect(result).toBe("5:30");
  });
});
