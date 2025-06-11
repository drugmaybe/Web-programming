import camelCase from 'lodash/camelCase';

// BEGIN
export default function normalize(document) {
    const elements = document.body.getElementsByTagName('*');

    Array.from(elements).forEach(element => {
        if (element.classList && element.classList.length > 0) {
            const newClasses = Array.from(element.classList).map(className =>
                camelCase(className)
            );
            element.className = newClasses.join(' ');
        }
    });
}
// END