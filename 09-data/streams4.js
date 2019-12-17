// Example of a transformation stream

const fs = require('fs');
const zlib = require('zlib');
const path = require("path");

const file = path.resolve(__dirname, "input.txt");

// transform input file into a gz file
fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(file + '.gz'))
  .on('finish', () => console.log('Done'));