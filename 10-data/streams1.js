// Example fo using a Stream to read a file

const fs = require('fs');
const path = require('path')

let data = '';

// Create a readable stream
let readableStream = fs.createReadStream(path.resolve(__dirname,'input.txt'));

// Set the encoding to be utf8. 
readableStream.setEncoding('UTF8');

// Handle stream events --> data, end,
readableStream.on('data', function(line) {
   data += line;
});

// Once all the data has been read - run this
// When readable stream finishes reading data it fires "end" event.
readableStream.on('end', function(){
   console.log(data);
});