import _ from 'lodash';

// BEGIN
const countWords = (sentence) => {
    if (sentence === '') return {};

    const words = _.words(sentence.toLowerCase());
    const result = {};

    for (const word of words) {
        result[word] = (result[word] || 0) + 1;
    }

    return result;
};

export default countWords;
// END