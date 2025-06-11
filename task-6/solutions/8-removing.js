// BEGIN
const getSameParity = (numbers) => {
    if (numbers.length === 0) {
        return [];
    }

    const firstNumberParity = Math.abs(numbers[0]) % 2;
    return numbers.filter(num => Math.abs(num) % 2 === firstNumberParity);
};

export default getSameParity;
// END