import fs from 'fs';

// BEGIN
const compareFileSizes = (filePath1, filePath2, callback) => {
    fs.stat(filePath1, (error1, stats1) => {
        if (error1) {
            callback(error1);
            return;
        }

        fs.stat(filePath2, (error2, stats2) => {
            if (error2) {
                callback(error2);
                return;
            }

            const result = Math.sign(stats1.size - stats2.size);
            callback(null, result);
        });
    });
};

export { compareFileSizes };
// END