// Load the mongoose module
const mongoose = require("mongoose");

// Set up default mongoose connection
const url = "mongodb://127.0.0.1/userdb";
mongoose.connect(url, 
  {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  poolSize: 10,
});

//Get the default connection
const connection = mongoose.connection;

// What to do on  a connection error
connection.on("error", (err) => console.error(err));

//Define a schema
const Schema = mongoose.Schema;
const UserModelSchema = new Schema({
  id: Number,
  name: String,
});

// Compile model from schema and associate with collection UserModel
const UserModel = mongoose.model("UserModel", UserModelSchema);

// Define models functions

// Find a user document using the id
function getUserById(id) {
  console.log("getUserById(", id, ")");
  return UserModel.find({ id: id });
}

// Find all documents returning just the id and the name
function getAllUsers() {
  console.log("getAllUsers");
  return UserModel.find({}, "id name");
}

// Create a new user document in the collection
function addUser(user) {
  console.log("addUser(", user, ")");
  return UserModel.create(user);
}

// Update a document (by replacing it)
function updateUser(user) {
  console.log("updateUser(", user, ")");
  return UserModel.replaceOne({ id: user.id }, user);
}

// Delete a document
function deleteUser(id) {
  console.log("deleteUser(", id, ")");
  return UserModel.deleteOne({ id: id });
}

// Export functions from Module
module.exports = { getUserById, getAllUsers, addUser, updateUser, deleteUser };
