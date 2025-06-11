import fs from 'fs';

// BEGIN
const write = (filePath, data, callback) => {
    fs.writeFile(filePath, data, 'utf-8', (error) => {
        if (error) {
            callback(error);
            return;
        }
        callback(null);
    });
};

export default write;
// END