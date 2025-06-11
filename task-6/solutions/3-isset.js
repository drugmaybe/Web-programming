// BEGIN
export const get = (array, index, defaultValue = null) => {
    if (index < 0 || index >= array.length) {
        return defaultValue;
    }
    return array[index];
};
// END