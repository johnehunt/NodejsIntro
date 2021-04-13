const fs = require("fs");
const path = require("path");

console.log('Starting')

// Create a writable stream
const writeableStream = fs.createWriteStream(
  path.resolve(__dirname, "output.txt")
);

// Write data to stream
console.log('Writing data to stream')
writeableStream.write("If music be the food of love,\n");
writeableStream.write("Give me excess of it, that, surfeiting,\n");
writeableStream.write("The appetite may sicken, and so die.");

// Once the stream is finished it emits the "finish" event
writeableStream.on("finish", () => {
  console.log("Finished Writing");
});

// When stream is finally closed; emits the close event
writeableStream.on("close", () => {
  console.log("Closing stream");
});

// Close the writeableStream
console.log('Calling close() on stream')
writeableStream.close();
