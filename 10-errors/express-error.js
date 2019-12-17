// An example of handling errors in Express
// Errors that occur in synchronous code inside route handlers
// and middleware require no extra work. If synchronous code throws an
// error, then Express will catch and process it.

const express = require("express");
const app = express();
const fs = require("fs");

const port = 8080;

app.listen(port, () => {
  console.log("Server Running - http://localhost:" + port);
});

app.get("/", (req, res, next) => {
  fs.readFile("/file-does-not-exist", function(err, data) {
    if (err) {
      console.log("Opps in here");
      next(err); // Pass errors to Express
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Hello Express World!</h1><p>Welcome Everyone.</p>");
      res.end();
    }
  });
});

/*
app.get('/', function (req, res, next) {
  Promise.resolve().then(function () {
    throw new Error('BROKEN')
  }).catch(next) // Errors will be passed to Express.
})
*/