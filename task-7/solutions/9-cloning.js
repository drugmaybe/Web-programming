// BEGIN
const cloneShallow = (obj) => {
    const result = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }

    return result;
};

export default cloneShallow;
// END
