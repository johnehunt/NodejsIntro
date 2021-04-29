const fs = require('fs');
const path = require("path");

const filename = path.resolve(__dirname, 'demofile.txt')
const rs = fs.createReadStream(filename);

rs.on('open', function () {
  console.log('The file is open');
});