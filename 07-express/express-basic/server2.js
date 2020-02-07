const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Server Running - http://localhost:8080");
});

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello Express World!</h1><p>Welcome Everyone.</p>");
  res.end();
});

app.get("/about", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>About</h1><p>This is the about page.</p>");
  res.end();
});

app.get("/help", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Help</h1><p>This is the Help page.</p>");
  res.end();
});

app.get("/contact", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Contacts</h1><p>This is the Contact page.</p>");
  res.end();
});

// Handle unknown URL
app.use(function(req, res, next) {
  res.status(404).send("page not found");
});
