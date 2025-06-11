// BEGIN
export const calculateSum = (array) => {
    if (array.length === 0) {
        return 0;
    }

    return array.reduce((sum, num) => {
        return num % 3 === 0 ? sum + num : sum;
    }, 0);
};
// END