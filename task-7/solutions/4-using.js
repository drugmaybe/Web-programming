// BEGIN
const getDomainInfo = (domain) => {
    let scheme = 'http';
    let name = domain;

    if (domain.startsWith('https://')) {
        scheme = 'https';
        name = domain.replace('https://', '');
    } else if (domain.startsWith('http://')) {
        name = domain.replace('http://', '');
    }

    return { scheme, name };
};

export default getDomainInfo;
// END