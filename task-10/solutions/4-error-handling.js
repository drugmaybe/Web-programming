import fs from 'fs';

// BEGIN
const move = (sourcePath, destPath, callback) => {
 
    fs.readFile(sourcePath, 'utf-8', (readError, data) => {
        if (readError) {
            callback(readError);
            return;
        }

        fs.writeFile(destPath, data, 'utf-8', (writeError) => {
            if (writeError) {
                callback(writeError);
                return;
            }

            fs.unlink(sourcePath, (unlinkError) => {
                callback(unlinkError);
            });
        });
    });
};

export { move };
// END
