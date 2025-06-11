import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => {
    return emails.reduce((acc, email) => {
        const domain = email.split('@')[1];
        if (freeEmailDomains.includes(domain)) {
            acc[domain] = get(acc, domain, 0) + 1;
        }
        return acc;
    }, {});
};

export default getFreeDomainsCount;
// END