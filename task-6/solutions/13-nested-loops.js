const _ = require("lodash"); 

// BEGIN
const getSameCount = (arr1, arr2) => {
    const uniqueArr1 = _.uniq(arr1);
    const uniqueArr2 = _.uniq(arr2);
    let count = 0;

    for (const item1 of uniqueArr1) {
        for (const item2 of uniqueArr2) {
            if (item1 === item2) {
                count++;
                break;
            }
        }
    }

    return count;
};

export default getSameCount;
// END