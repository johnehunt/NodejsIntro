console.log("Starting HTTP Server");
// Load required http module - note naming convention
// const holding reference to module is named after the
// module itself
const http = require('http');

// Create the server instance
const server = http.createServer(function(req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});

// Set the port that the server will listen on
console.log('Listening on port 8080');
server.listen(8080);

console.log('Started - use http://localhost:8080/');
