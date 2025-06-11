// BEGIN
const solution = (url) => {
    window.location.href = url;

    const browserInfo = navigator.userAgent.split(' ')[0];
    const currentUrl = window.location.href;

    return `${browserInfo} ${currentUrl}`;
};

export default solution;
// END