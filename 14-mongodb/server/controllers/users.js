// Load Models
const Users = require("../models/users");

// Defines Controller functions
function getUsers(req, res) {
  Users.getAllUsers().then((users) => {
    res.json(users);
  });
}

function postUser(req, res) {
  console.log("postUser", req.body);
  const user = req.body;
  Users.addUser(user).then(() => {
    res.status(201).send();
  }).catch((error) => {
    console.log(error);
    res.status(400).send();
  });
}

function updateUser(req, res) {
  console.log("updateUser", req.body);
  const user = req.body;
  Users.updateUser(user).then(() => {
    res.status(200).send();
  }).catch((error) => {
    console.log(error);
    res.status(400).send();
  });
}

function getUser(req, res) {
  res.json({
    id: req.params.id,
    name: "John Hunt"
  });
}

function deleteUser(req, res) {
    const id = req.params.id;
  Users.deleteUser(id).then(() => {
    res.status(202).send();
  }).catch((error) => {
    console.log(error);
    res.status(400).send();
  });
}

// Now export functions from module
module.exports = {getUsers, getUser, postUser, updateUser, deleteUser}