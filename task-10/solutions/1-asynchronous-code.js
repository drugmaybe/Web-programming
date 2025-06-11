import fs from 'fs';

// BEGIN
const print = async (filePath) => {
    try {
        const content = await fs.promises.readFile(filePath, 'utf-8');
        console.log(content);
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
};

export default print;
// END
