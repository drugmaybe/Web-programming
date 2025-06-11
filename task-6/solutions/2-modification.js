// BEGIN
export const swap = (array) => {
    if (array.length < 2) {
        return array;
    }

    const first = array[0];
    const last = array[array.length - 1];

    const newArray = [...array];
    newArray[0] = last;
    newArray[newArray.length - 1] = first;

    return newArray;
};
// END