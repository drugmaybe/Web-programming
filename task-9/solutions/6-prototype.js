// BEGIN
export default class Money {
    constructor(value, currency = 'usd') {
        this._value = value;
        this._currency = currency;
    }

    getValue() {
        return this._value;
    }

    getCurrency() {
        return this._currency;
    }

    exchangeTo(currency) {
        if (currency === this._currency) {
            return new Money(this._value, this._currency);
        }

        let newValue;
        if (this._currency === 'usd' && currency === 'eur') {
            newValue = this._value * 0.7;
        } else if (this._currency === 'eur' && currency === 'usd') {
            newValue = this._value * 1.2;
        } else {
            throw new Error(`Unsupported currency conversion from ${this._currency} to ${currency}`);
        }

        return new Money(newValue, currency);
    }

    add(money) {
        const moneyInThisCurrency = money.exchangeTo(this._currency);
        const sumValue = this._value + moneyInThisCurrency.getValue();
        return new Money(sumValue, this._currency);
    }

    format() {
        const currencyCode = this._currency.toUpperCase();
        return this._value.toLocaleString('en-US', {  
            style: 'currency',
            currency: currencyCode,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

    }
}

// END
