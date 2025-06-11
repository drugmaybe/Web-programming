// BEGIN
const make = (numer = 0, denom = 1) => {
    let numerator = numer;
    let denominator = denom;

    return {
        setNumer(num) {
            numerator = num;
        },
        setDenom(num) {
            denominator = num;
        },
        getNumer() {
            return numerator;
        },
        getDenom() {
            return denominator;
        },
        toString() {
            return `${numerator}/${denominator}`;
        },
        add(rat) {
            const newNumer = this.getNumer() * rat.getDenom() + this.getDenom() * rat.getNumer();
            const newDenom = this.getDenom() * rat.getDenom();
            return make(newNumer, newDenom);
        }
    };
};

export default make;
// END