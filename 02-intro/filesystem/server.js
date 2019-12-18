console.log("Starting HTTP Server");

const http = require("http");
const fs = require("fs");
const path = require("path");

// Load 'pages' using the fs module
const homePage = fs.readFileSync(path.resolve(__dirname, "index.html"));
const contactPage = fs.readFileSync(path.resolve(__dirname, "contact.html"));
const aboutPage = fs.readFileSync(path.resolve(__dirname, "about.html"));
const helpPage = fs.readFileSync(path.resolve(__dirname, "help.html"));

const server = http.createServer(function(req, res) {
  console.log("Handling", req.url);
  if (req.url == "/contact") res.end(contactPage);
  else if (req.url == "/about") res.end(aboutPage);
  else if (req.url == "/help") res.end(helpPage);
  else if (req.url == "/") res.end(homePage);
  else {
    res.writeHead(404);
    res.write("page not found");
  }
  res.end();
});

console.log("Listening on port 8080");
server.listen(8080);

console.log("Started - use http://localhost:8080/");
