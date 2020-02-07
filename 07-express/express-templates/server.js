const express = require("express");
const path = require("path");
const app = express();

// view engine setup - indicat directory
// caontaining views as well as view template engie
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  console.log("In GET /");
  // Note just indicates index not index.pug
  res.render("index", {
    title: "Express Template Example",
    message: "Welcome Everyone"
  });
});

app.listen(8080, () => {
  console.log("Server Running - http://localhost:8080");
});
