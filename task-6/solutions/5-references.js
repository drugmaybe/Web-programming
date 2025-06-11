// BEGIN
export const reverse = (array) => {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        const mirrorIndex = array.length - 1 - i;
        [array[i], array[mirrorIndex]] = [array[mirrorIndex], array[i]];
    }
};
// END