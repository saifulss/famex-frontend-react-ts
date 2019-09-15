export class CurrencyUtils {
  static toCurrency(number: number): string {
    return new Intl.NumberFormat("en-sg", {
      style: "currency",
      currency: "sgd"
    }).format(number);
  }

  static toCurrencyWithoutTrailingZeroes(number: number): any {
    const parts = new Intl.NumberFormat("en-sg", {
      style: "currency",
      currency: "sgd"
    }).formatToParts(number);

    let result = "";

    for (const part of parts) {
      if (part.type === "fraction") {
        if (part.value === "00") {
          result = result.replace(".", "");
          return result;
        }
      }
      result += part.value;
    }
    return result;
  }
}
