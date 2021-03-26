// Requires us to npm install request
console.log("Starting HTTP Server");

const http = require("http");
const fetch = require('node-fetch');

const server = http.createServer(function(req, res) {
  console.log("Handling", req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/") {
    res.write("<h1>Hello World!</h1><p>Welcome Everyone.</p>");
    res.end();
  } else if (req.url == "/user") {
    asyncUserDetailsCall(res);
  }
});

async function asyncUserDetailsCall(resp) {
  console.log("calling");
  const options = {headers: {
      "User-Agent": "request"
    }};
  const promise = await fetch("https://api.github.com/users/johnehunt", options);
  const userDetails = await promise.json(); //assuming data is json
  console.log(userDetails)

  console.log("Obtained user details", userDetails);
  // Write details back to client
  resp.write(
    "User details, user: " + userDetails.login + ", id: " + userDetails.id
  );
  resp.end();
}

console.log("Listening on port 8080");
server.listen(8080);

console.log("Started");
console.log("For basic usage see - http://localhost:8080/" )
console.log("For user info see - http://localhost:8080/user" )