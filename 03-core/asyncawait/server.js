// Requires us to npm install request
console.log("Starting HTTP Server");

const http = require("http");
const request = require("request");

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
  var userDetails = await getUserDetails();
  console.log("Obtained user details", userDetails);
  // Write details back to client
  resp.write(
    "User details, user: " + userDetails.login + ", id: " + userDetails.id
  );
  resp.end();
}

function getUserDetails() {
  // Setting URL and headers for request from guthub
  var options = {
    url: "https://api.github.com/users/johnehunt",
    headers: {
      "User-Agent": "request"
    }
  };
  // Set up new promise
  const promise = new Promise(function(resolve, reject) {
    // Do async job - this could take some time
    request.get(options, function(err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
  return promise;
}

console.log("Listening on port 8080");
server.listen(8080);

console.log("Started");
