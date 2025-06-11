import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
const getDirectorySize = (dirPath, callback) => {
    fs.readdir(dirPath, (readError, files) => {
        if (readError) {
            callback(readError);
            return;
        }

        const filePaths = files.map(file => path.join(dirPath, file));

        async.map(
            filePaths,
            (filePath, mapCallback) => {
                fs.stat(filePath, (statError, stats) => {
                    if (statError) {
                        mapCallback(null, 0); 
                        return;
                    }
                    mapCallback(null, stats.isFile() ? stats.size : 0);
                });
            },
            (mapError, results) => {
                if (mapError) {
                    callback(mapError);
                    return;
                }
                const totalSize = _.sumBy(results, size => size);
                callback(null, totalSize);
            }
        );
    });
};

export { getDirectorySize };
// END
