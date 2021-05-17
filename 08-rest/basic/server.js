const express = require("express");
const app = express();

// To allow body to be parsed - pre express 4.16 (4.0 onwards)
// const bodyParser = require("body-parser");
// configure app to use bodyParser()
// this will let us get the data from a POST
// Handle JSON in the request body
// app.use(bodyParser.json());
// Handle URL encoded requests; key-value pairs
// app.use(bodyParser.urlencoded({ extended: true }));

// As of Express 4.16 or newer body-parser has been (re) added to the express core
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// Set the port
const port = 8080;

// Set up some data to serve
var users = [];
users[0] = { id: 0, name: "Jasmine Jones" };
users[1] = { id: 1, name: "Adam Smith" };

// Get a user by id
app.get("/user/:id", (req, res) => {
  res.json({
    id: req.params.id,
    name: "John Hunt",
  });
});

// Get a list of users
app.get("/users", (req, res) => {
  res.json(users);
});

// Use Post to add a user
app.post("/users", (req, res) => {
  console.log("post", req.body);
  const user = req.body;
  users[user.id] = user;
  res.status(201).send("User added");
});

// Use Put to update a User
app.put("/users", (req, res) => {
  console.log("put", req.body);
  const user = req.body;
  users[user.id] = user;
  res.status(201).send("User updated");
});

// Delete a User
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log("delete user: ", id);
  delete users[id];
  res.status(204).send("User deleted");
});

// Finally start the server listening on the default port
app.listen(port, () => {
  console.log("Server Running - http://localhost:8080/users");
});
