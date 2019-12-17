// Load the mongoose module
const mongoose = require("mongoose");

// Set up default mongoose connection
const url = "mongodb://127.0.0.1/userdb";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//Define a schema
var Schema = mongoose.Schema;

var UserModelSchema = new Schema({
  id: Number,
  name: String
});

// Compile model from schema
var UserModel = mongoose.model("UserModel", UserModelSchema);

// Define models functions

function getUserById(id) {
  return UserModel.findById(id);
}

function getAllUsers() {
  console.log("getAllUsers");
  const users = UserModel.find({}, "id name");
  return users;
}

function addUser(user) {
  UserModel.create(user);
}

function updateUser(user) {
  UserModel.replaceOne({id: user.id}, user);
}

function deleteUser(id) {
  UserModel.deleteOne({ id: id });
}

// Export functions from Module
module.exports = { getUserById, getAllUsers, addUser, updateUser, deleteUser };
