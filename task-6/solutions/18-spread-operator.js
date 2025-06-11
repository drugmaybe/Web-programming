// BEGIN
const flatten = (array) => {
    const result = [];

    for (const item of array) {
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
    }

    return result;
};

export { flatten };
// END