// Load Models
const Users = require("../models/users");

// Defines Controller functions
// async function getUsers(req, res) {
//   const users = await Users.getAllUsers();
//   res.json(users);
// }

function getUsers(req, res) {
  console.log("controller users getUsers()");
  Users
    .getAllUsers()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
}

function postUser(req, res) {
  console.log("postUser", req.body);
  const user = req.body;
  Users
    .addUser(user)
    .then((result) => {
      res.status(201).send();
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
}

function updateUser(req, res) {
  console.log("updateUser", req.body);
  const user = req.body;
  Users
    .updateUser(user)
    .then((result) => {
      res.status(201).send();
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
}

function getUser(req, res) {
  Users
    .getUserById(req.params.id)
    .then((user) => {
      res.json(user);    
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
}

// Alternative style using await illustrated in this function
async function deleteUser(req, res) {
  const id = req.params.id;
  await Users.deleteUser(id);
  res.status(200).send();
}

// Now export functions from module
module.exports = { getUsers, getUser, postUser, updateUser, deleteUser };
