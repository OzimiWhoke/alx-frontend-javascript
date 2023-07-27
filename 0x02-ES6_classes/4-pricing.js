export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount === "number") {
      this._amount = newAmount;
    } else {
      throw new TypeError("Amount must be a number");
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (newCurrency instanceof Currency) {
      this._currency = newCurrency;
    } else {
      throw new TypeError("Currency must be an instance of Currency class");
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== "number" || typeof conversionRate !== "number") {
      throw new TypeError("Both amount and conversion rate must be numbers");
    }

    return amount * conversionRate;
  }
}
