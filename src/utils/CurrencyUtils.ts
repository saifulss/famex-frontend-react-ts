export class CurrencyUtils {
  static toCurrency(number: number) {
    return new Intl.NumberFormat("en-sg", {
      style: "currency",
      currency: "sgd"
    }).format(number);
  }
}
