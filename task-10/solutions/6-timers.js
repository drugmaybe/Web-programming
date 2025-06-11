import fs from 'fs';

// BEGIN
const watch = (filePath, interval, callback) => {
    let lastCheckTime = Date.now();

    const timerId = setInterval(() => {
        fs.stat(filePath, (err, stats) => {
            if (err) {
                clearInterval(timerId);
                callback(err);
                return;
            }

            if (stats.mtimeMs > lastCheckTime) {
                callback(null);
            }
            lastCheckTime = Date.now();
        });
    }, interval);

    return timerId;
};

export default watch;
// END
