// Example of using a Stream to read a file
const fs = require('fs');
const path = require('path')

var data = '';

// Create a readable stream
var readableStream = fs.createReadStream(path.resolve(__dirname,'input.txt'));

// Set the encoding to be utf8. 
readableStream.setEncoding('UTF8');

// Data generated from stream
readableStream.on('data', function(line) {
   console.log('Reading line of text')
   data += line;
});

// Handle errors in the stream
readableStream.on('error', function(err) {
   console.error(err);
});

// 'end' event is emitted when there is no more data to be 
// consumed from the stream.
readableStream.on('end', function(){
   console.log("end", data);
});

// 'close' event is emitted when file has been closed
readableStream.on('close', function(){
   console.log("close", data);
});
