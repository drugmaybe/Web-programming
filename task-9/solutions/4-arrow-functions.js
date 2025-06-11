// BEGIN
const each = (collection, callback) => {
    collection.forEach(obj => {
        callback.call(obj);
    });
};

export default each;
// END
