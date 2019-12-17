const Users = require("../model/users");

function getUsers(req, res) {
  // Obtain the list of users
  const users = Users.getAllUsers();
  res.json(users);
}

function postUser(req, res) {
  console.log("postUser", req.body);
  const user = req.body;
  Users.addUser(user);
  res.send("User added");
}

function updateUser(req, res) {
  console.log("updateUser", req.body);
  const user = req.body;
  Users.updateUser(user);
  res.send("User updated");
}

function getUser(req, res) {
  res.json({
    id: req.params.id,
    name: "John Hunt"
  });
}

function deleteUser(req, res) {
    const id = req.params.id;
  Users.deleteUser(id);
  res.send("User deleted");
}

// Now export functions from module
module.exports = {getUsers, getUser, postUser, updateUser, deleteUser}