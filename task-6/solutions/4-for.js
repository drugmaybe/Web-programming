// BEGIN
const addPrefix = (array, prefix) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(`${prefix} ${array[i]}`);
    }
    return result;
};

export default addPrefix;
// END