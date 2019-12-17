console.log("Starting HTTP Server");

// Load required modules
const http = require("http");
const url = require("url");

// Set up server
const server = http.createServer(function(req, res) {
  console.log("Handling", req.url);

  const q = url.parse(req.url, true);

  console.log(q.host);
  console.log(q.pathname);
  console.log(q.search);

  var data = q.query;
  console.log(data);
  console.log(data.month); //returns 'february'

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    "<h1>Thank You</h1><p>We have processed your data, you requested info on " +
      JSON.stringify(data) +
      "</p>"
  );
  res.end();
});

console.log("Server Listening on port 8080");
server.listen(8080);

console.log("Started");
console.log.og('Try http://localhost:8080/diary?year=2020&month=September')
