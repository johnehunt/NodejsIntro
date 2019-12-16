const express = require("express");
const app = express();
// To allow body to be parsed
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var users = {};
users[1] = { id: 1, name: "Jos Jones" };

app.listen(8080, () => {
  console.log("Server Running - http://localhost:8080");
});

// Get a user by id
app.get("/user/:id", (req, res) => {
  res.json({
    id: req.params.id,
    name: "John Hunt"
  });
});

// Get a list of users
app.get("/users/list", (req, res) => {
  res.json(users);
});

// Add a user
app.post("/users", (req, res) => {
  console.log("post", req.body);
  const user = req.body;
  users[user.id] = user;
  res.send("User added");
});

// Update a User
app.put("/users", (req, res) => {
  console.log("put", req.body);
  const user = req.body;
  users[user.id] = user;
  res.send("User updated");
});

// Delete a User
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  delete users[id];
  res.send("User deleted");
});
