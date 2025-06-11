import fsp from 'fs/promises';

// BEGIN
const reverse = async (filePath) => {
    try {
        const data = await fsp.readFile(filePath, 'utf-8');

        const lines = data.split('\n');
        const reversedLines = lines.reverse();

        const reversedContent = reversedLines.join('\n');
        await fsp.writeFile(filePath, reversedContent);
    } catch (error) {
        throw error; 
    }
};

export { reverse };
// END