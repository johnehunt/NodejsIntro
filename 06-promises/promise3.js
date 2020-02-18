// Requires us to npm install request
console.log("Starting HTTP Server");

const http = require("http");
const request = require("request");

const server = http.createServer(function (req, resp) {
  console.log("Handling", req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url == "/") {
    resp.write("<h1>Hello World!</h1><p>Welcome Everyone.</p>");
    resp.end();
  } else if (req.url == "/user") {
    // Setting URL and headers for request from guthub
    var options = {
      url: "https://api.github.com/users/johnehunt",
      headers: {
        "User-Agent": "request"
      }
    };
    // Set up new promise
    const promise = new Promise(function (resolve, reject) {
      // Do async job - this could take some time
      request.get(options, function (err, resp, body) {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(body));
        }
      });
    }).then(
      function (result) {
        userDetails = result;
        console.log("Obtained user details", userDetails);
        // Write details back to client
        resp.write('User details, user: ' + userDetails.login + ', id: ' + userDetails.id);
        resp.end();
      })
      .catch(
        function (err) {
          console.log(err);
        }
      );
  }
});

console.log("Listening on port 8080");
server.listen(8080);

console.log("Started");
