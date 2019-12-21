const fs = require("fs");
const path = require("path");

// Create a readable stream
const readableStream = fs.createReadStream(path.resolve(__dirname, "input.txt"));

// Create a writable stream
const writeableStream = fs.createWriteStream(
  path.resolve(__dirname, "output2.txt")
);

// Pipe the read and write operations
// read input.txt and write data to output.txt
readableStream.pipe(writeableStream);

console.log("End of the Process");
