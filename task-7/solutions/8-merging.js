import _ from 'lodash';

// BEGIN
const fill = (obj, keys, data) => {
    if (keys.length === 0) {
        Object.assign(obj, data);
    } else {
        const pickedData = _.pick(data, keys);
        Object.assign(obj, pickedData);
    }
    return obj;
};

export default fill;
// END