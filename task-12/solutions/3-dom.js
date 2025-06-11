// BEGIN
const bodyContent = document.body.innerHTML.trim();

const lines = bodyContent.split('\n').map(line => line.trim()).filter(line => line.length > 0);

const wrapped = lines.map(line => `<p>${line}</p>`).join('\n');

document.body.innerHTML = wrapped;

// END