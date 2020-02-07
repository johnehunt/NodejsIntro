// Load Models
const Users = require("../models/users");

// Defines Controller functions
async function getUsers(req, res) {
  const users = await Users.getAllUsers();
  res.json(users);
}

async function postUser(req, res) {
  console.log("postUser", req.body);
  const user = req.body;
  await Users.addUser(user);
  res.send("User added");
}

async function updateUser(req, res) {
  console.log("updateUser", req.body);
  const user = req.body;
  await Users.updateUser(user);
  res.send("User updated");
}

async function getUser(req, res) {
  const user = await Users.getUserById(req.params.id);
  return user;
}

async function deleteUser(req, res) {
  const id = req.params.id;
  await Users.deleteUser(id);
  res.send("User deleted");
}

// Now export functions from module
module.exports = { getUsers, getUser, postUser, updateUser, deleteUser };
