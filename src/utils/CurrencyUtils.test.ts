// @ts-ignore
import { CurrencyUtils } from "./CurrencyUtils";

describe("CurrencyUtils.ts", () => {
  it("formats number into currency with trailing zeroes only when fractions present", () => {
    expect(CurrencyUtils.toCurrencyWithoutTrailingZeroes(0)).toBe("$0");
    expect(CurrencyUtils.toCurrencyWithoutTrailingZeroes(1)).toBe("$1");
    expect(CurrencyUtils.toCurrencyWithoutTrailingZeroes(100)).toBe("$100");
    expect(CurrencyUtils.toCurrencyWithoutTrailingZeroes(1000)).toBe("$1,000");
    expect(CurrencyUtils.toCurrencyWithoutTrailingZeroes(1000.1)).toBe("$1,000.10");
    expect(CurrencyUtils.toCurrencyWithoutTrailingZeroes(1000.11)).toBe("$1,000.11");
  });
});