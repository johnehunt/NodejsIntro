console.log("Starting HTTP Server");

//----------------------
// Load required modules
//----------------------

const http = require("http");
// ES 6 Import module format
// import { createServer } from "http";

// avoid hard coding the path
const path = require('path')
// Load custom module
const my_util = require(path.resolve(__dirname, "custom/my_utils"));

//----------------------
// Set up server
//----------------------

const server = http.createServer(function(req, res) {
  console.log("Handling", req.url);
  if (req.url == "/date")
    res.write("<h1>Date</h1><p>" + my_util.getDate() + "</p>");
  else if (req.url == "/time")
    res.write("<h1>Time</h1><p>" + my_util.getTime() + "</p>");
  else if (req.url == "/timestamp")
    res.write("<h1>Timestamp</h1><p>" + my_util.getTimestamp() + "</p>");
  else if (req.url == "/mod")
    res.write("<h1>MOD</h1><p>" + my_util.getMOD() + "</p>");
  else if (req.url == "/")
    res.write("<h1>Hello World!</h1><p>Welcome Everyone - the MAX is " + my_util.MAX + ".</p>");
  else {
    res.writeHead(404);
    res.write("page not found");
  }
  res.end();
});

console.log("Server Listening on port 8080");
server.listen(8080);

console.log("Started");
console.log("Try http://localhost:8080/");
