const fs = require("fs");
const path = require("path");

// Create a writable stream
const writeableStream = fs.createWriteStream(
  path.resolve(__dirname, "output.txt")
);

writeableStream.write("If music be the food of love,\n");
writeableStream.write("Give me excess of it, that, surfeiting,\n");
writeableStream.write("The appetite may sicken, and so die.");

// Once the stream is finished it emitts the "finish" event
writeableStream.on("finish", () => {
  console.log("Finished Writing");
});

writeableStream.close();
