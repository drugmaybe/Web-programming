import _ from 'lodash';

// BEGIN
const average = (...args) => {
    if (args.length === 0) return null;
    return _.sum(args) / args.length;
};

export default average;
// END