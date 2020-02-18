// Load the mongoose module
const mongoose = require("mongoose");

// Set up default mongoose connection
const url = "mongodb://127.0.0.1/userdb";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

//Get the default connection
const connection = mongoose.connection;

// What to do on  a connection error
connection.on("error", err => console.error(err));

//Define a schema
const Schema = mongoose.Schema;
const UserModelSchema = new Schema({
  id: Number,
  name: String
});

// Compile model from schema
const UserModel = mongoose.model("UserModel", UserModelSchema);

// Define models functions

function getUserById(id) {
  console.log("getUserById(", id, ")");
  return UserModel.find({id: id });
}

function getAllUsers() {
  console.log("getAllUsers");
  return UserModel.find({}, "id name");
}

function addUser(user) {
  console.log("addUser(", user, ")");
  return UserModel.create(user);
}

function updateUser(user) {
  console.log("updateUser(", user, ")");
  return UserModel.replaceOne({id: user.id}, user);
}

function deleteUser(id) {
  console.log("deleteUser(", id, ")");
  return UserModel.deleteOne({ id: id });
}

// Export functions from Module
module.exports = { getUserById, getAllUsers, addUser, updateUser, deleteUser };
