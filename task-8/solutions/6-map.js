// BEGIN
const getChildren = (users) => {
    return users.flatMap(user => user.children);
};

export default getChildren;
// END