const express = require("express");
const app = express();
const path = require("path");

// Serve up static files automatically
app.use(express.static(path.resolve(__dirname,"public")));

app.listen(8080, () => {
  console.log("Server Running - http://localhost:8080");
});
