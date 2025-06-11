// BEGIN
const getTotalAmount = (money, currency) => {
    let sum = 0;

    for (const item of money) {
        if (item.slice(0, 3) !== currency) {
            continue;
        }
        const amount = Number(item.slice(4));
        sum += amount;
    }

    return sum;
};

export default getTotalAmount;
// END