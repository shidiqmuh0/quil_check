const fs = require('fs');

// Read data from input.json
const inputData = JSON.parse(fs.readFileSync('ouput.json', 'utf8'));

// Read data from quil.json and convert it to a Set for faster lookup
const quilData = new Set(JSON.parse(fs.readFileSync('ceremony_voucher.json', 'utf8')));

// Check if items in inputData exist in quilData
const result = inputData.filter(item => quilData.has(item));

// Save the results to hasil.json
fs.writeFileSync('valid.json', JSON.stringify(result, null, 2));

console.log("Check completed. Results saved to valid.json.");