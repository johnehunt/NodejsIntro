console.log("Starting HTTP Server");

const http = require("http");

const server = http.createServer(function(req, res) {
  res.write("Hello World!"); //write a response to the client
  res.end(); //end the response
});

console.log("Listening on port 8080");
server.listen(8080);

console.log("Started - use http://localhost:8080/");
ß