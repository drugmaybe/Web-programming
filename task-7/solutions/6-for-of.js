// BEGIN
const pick = (obj, keys) => {
    const result = {};

    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }

    return result;
};

export default pick;
// END