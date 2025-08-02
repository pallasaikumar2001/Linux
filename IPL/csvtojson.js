const csvToJson = require('convert-csv-to-json');

// Input and Output file paths
const inputFile = './matches.csv';
const outputFile = './matches.json';

// Convert CSV to JSON
csvToJson
.fieldDelimiter(',') // Optional: Specify delimiter if it's not a comma
.generateJsonFileFromCsv(inputFile, outputFile);

const input='./deliveries.csv'
const output='./deliveries.json'
csvToJson
.fieldDelimiter(',')
.generateJsonFileFromCsv(input,output)

console.log('Conversion completed! JSON saved to output.json');
