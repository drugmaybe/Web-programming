// BEGIN
const buildDefinitionList = (definitions) => {
    if (!definitions || definitions.length === 0) {
        return '';
    }

    const items = definitions.map(([term, description]) =>
        `<dt>${term}</dt><dd>${description}</dd>`
    ).join('');

    return `<dl>${items}</dl>`;
};

export default buildDefinitionList;
// END