// BEGIN
const countUniqChars = (str) => {
    if (str.length === 0) return 0;

    const uniqueChars = [];
    for (const char of str) {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    }

    return uniqueChars.length;
};

export default countUniqChars;
// END