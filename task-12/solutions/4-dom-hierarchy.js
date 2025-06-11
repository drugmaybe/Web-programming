// BEGIN
const extractData = (rootElement) => {
    const paragraphs = rootElement.getElementsByTagName('p');
    const result = [];

    for (let i = 0; i < paragraphs.length; i++) {
        const text = paragraphs[i].textContent.trim();
        if (text) {
            result.push(text);
        }
    }

    return result;
};

export default extractData;
// END