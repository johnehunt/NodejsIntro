// Define how data is held
var users = [];

// Set up some initial data
users[1] = { id: 1, name: "Jos Jones" };

// Define models functions

function getAllUsers() {
  return users;
}

function addUser(user) {
  users[user.id] = user;
}

function updateUser(user) {
  users[user.id] = user;
}

function deleteUser(id) {
  delete users[id];
}

// Export functions from Module
module.exports = {getAllUsers, addUser, updateUser, deleteUser};