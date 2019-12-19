const express = require("express");
const app = express();

// avoid hard coding the path
const path = require('path')

app.listen(8080, () => {
  console.log("Server Running - http://localhost:8080");
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
});

app.get("/about", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'))
});

app.get("/help", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'help.html'))
});

app.get("/contact", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
});

// Handle unknown URL
app.use(function(req, res, next) {
  res.status(404).send("page not found");
});
