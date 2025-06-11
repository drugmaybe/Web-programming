// BEGIN
const magic = (...initialArgs) => {
    // Проверяем, что все аргументы - числа
    const validateArgs = (args) => {
        if (args.some(arg => typeof arg !== 'number')) {
            throw new Error('All arguments must be numbers');
        }
    };

    validateArgs(initialArgs);

    const sum = initialArgs.reduce((acc, num) => acc + num, 0);

    const innerMagic = (...args) => {
        validateArgs(args);
        return magic(...initialArgs, ...args);
    };

    innerMagic.valueOf = () => sum;

    return innerMagic;
};

export default magic;
// END
