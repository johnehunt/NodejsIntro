const fs = require('fs');
const path = require("path");

const filename = path.resolve(__dirname, 'demofile.txt')

// Create read stream on file
const rs = fs.createReadStream(filename);

// Set up event handlers
rs.on('open', function () {
  console.log('open - The file is open');
});

rs.on('close', () => {
    console.log('close - The file is closed');
});

rs.on('error', err => {
    console.log('error - There is an error with the file' + err);
});

rs.on('end', () => {
    console.log('end - The data has ended');
});

rs.on('data', chunk => {
    console.log(`data - Received ${chunk.length} bytes of data`);
});