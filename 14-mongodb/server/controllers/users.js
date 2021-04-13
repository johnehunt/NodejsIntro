// Load Models
const { model } = require("mongoose");
const Users = require("../models/users");


function setup() {
  return Users.setupMongoConnection()
}

// Defines Controller functions
function getUsers(req, res) {
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

async function getUsers2(req, res) {
  // Because of the await can use try catch
  try {
    const users = await Users.getAllUsers();
    res.json(users);
  } catch (ex) {
    console.log(error);
    res.status(500).send();
  }
}

function postUser(req, res) {
  console.log("postUser", req.body);
  const user = req.body;
  Users.addUser(user)
    .then(() => {
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
  Users.updateUser(user)
    .then(() => {
      res.status(200).send();
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
}

function getUser(req, res) {
  res.json({
    id: req.params.id,
    name: "John Hunt",
  });
}

function deleteUser(req, res) {
  const id = req.params.id;
  Users.deleteUser(id)
    .then(() => {
      res.status(202).send();
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send();
    });
}

// Now export functions from module
module.exports = { setup, getUsers, getUser, postUser, updateUser, deleteUser };
