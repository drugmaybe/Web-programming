// BEGIN
const make = (name, properties = {}) => {
    const defaults = {
        state: 'moderating',
        createdAt: Date.now()
    };

    return {
        name,
        ...defaults,
        ...properties
    };
};

export default make;
// END