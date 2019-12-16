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

app.get("/author", (req, res) => {
  res.json({
    name: "John Hunt"
  });
});
