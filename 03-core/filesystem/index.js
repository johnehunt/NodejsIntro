console.log("Starting HTTP Server");

// Load required modules - note naming convention
// const holding reference  to module is named after the
// module itself
const http = require("http");
const fs = require("fs");

const routeDir = "03-core/filesystem/";

// Load 'pages' using the fs module
const homePage = fs.readFileSync(routeDir + "index.html");
const contactPage = fs.readFileSync(routeDir + "contact.html");
const aboutPage = fs.readFileSync(routeDir + "about.html");
const helpPage = fs.readFileSync(routeDir + "help.html");

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

console.log("Started");
