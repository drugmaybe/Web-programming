// BEGIN
export default function prettify(document) {
    const divs = document.querySelectorAll('div');

    divs.forEach(div => {
        const nodesToWrap = [];

        div.childNodes.forEach(node => {
            if (node instanceof Text && node.textContent.trim() !== '') {
                const p = document.createElement('p');
                p.textContent = node.textContent;
                nodesToWrap.push(p);
            } else {
                nodesToWrap.push(node);
            }
        });

        div.innerHTML = '';
        nodesToWrap.forEach(node => div.appendChild(node));
    });
}
// END