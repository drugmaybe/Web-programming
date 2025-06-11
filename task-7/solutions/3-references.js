// BEGIN
const is = (company1, company2) => {
    const props = ['name', 'state', 'website'];
    return props.every(prop => company1[prop] === company2[prop]);
};

export default is;
// END