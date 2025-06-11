// BEGIN
const makeCensored = (text, stopWords) => {
    const words = text.split(' ');
    const censored = words.map(word =>
        stopWords.includes(word) ? '$#%!' : word
    );
    return censored.join(' ');
};

export default makeCensored;
// END