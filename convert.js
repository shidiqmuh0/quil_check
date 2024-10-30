const fs = require('fs');
const path = require('path');

// Folder containing the files
const folderPath = './quil';

// Function to get the last 114 characters and add "0x" prefix
function getHexWithPrefix(filePath) {
    const data = fs.readFileSync(filePath, 'utf8');
    const last114Chars = data.slice(-114); // Extract the last 114 characters
    return `0x${last114Chars}`;
}

// Get all file names in the folder
const files = fs.readdirSync(folderPath);

// Process each file and retrieve the result
const results = files
    .filter(file => file.endsWith('.hex')) // Filter only files with .hex extension
    .map(file => getHexWithPrefix(path.join(folderPath, file)));

// Generate JSON output
const jsonOutput = JSON.stringify(results, null, 2);

// Save the result to a JSON file
fs.writeFileSync('output.json', jsonOutput);

console.log("Process complete! Output saved to output.json");