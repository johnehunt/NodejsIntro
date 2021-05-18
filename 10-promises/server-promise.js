// Requires us to npm install request
console.log("Starting HTTP Server");

const http = require("http");
// const request = require("request"); no longer supported
const fetch = require("node-fetch");

const server = http.createServer(function (req, resp) {
  console.log("Handling", req.url);
  resp.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/") {
    resp.write("<h1>Hello World!</h1><p>Welcome Everyone.</p>");
    resp.end();
  } else if (req.url == "/user") {
    // Setting URL and headers for request from github
    const options = {
      headers: {
        "User-Agent": "request",
      },
    };

    console.log('Initialing fetch request');
    // Use node-fetch to call service as a promise
    fetch("https://api.github.com/users/johnehunt", options)
      .then((res) => res.json())
      .then((userDetails) => {
        console.log(userDetails);
        resp.write(
          "User details, user: " + userDetails.login + ", id: " + userDetails.id
        );
        resp.end();
        console.log('done with request')
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

console.log("Listening on port 8080");
server.listen(8080);

console.log("Started");
console.log("For basic usage see - http://localhost:8080/");
console.log("For user info see - http://localhost:8080/user");
