const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const URL = "mongodb://localhost:27017";
const DATABASE_NAME = "userdb";
const COLLECTION_NAME = "users";
var collection;

MongoClient.connect(
  URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(err, client) {
    if (err) {
      console.err("Problem connecting to MongoDB");
      throw err;
    }
    const database = client.db(DATABASE_NAME);
    collection = database.collection(COLLECTION_NAME);
    console.log(
      "Connected to '" +
        DATABASE_NAME +
        "' using collection " +
        COLLECTION_NAME
    );
  }
);

// Define models functions

function getAllUsers() {
  console.log("model.getAllUsers()");
  const promise = new Promise((resolve, reject) => {
    collection.find().toArray((err, users) => {
      if (err) reject(err);
      console.log("model.getAllBooks() - setting resolve");
      resolve(users);
    });
  });
  return promise;
}

function addUser(user) {
  const promise = new Promise((resolve, reject) => {
    collection.insertOne(user, (err, result) => {
      if (err) reject(err);
      console.log("1 document inserted: " + JSON.stringify(user));
      resolve();
    });
  });
  return promise;
}

function updateUser(user) {
  const promise = new Promise((resolve, reject) => {
    const query = { id: user.id };
    const newValues = { $set: user };
    collection.updateOne(query, newValues, (err, result) => {
      if (err) reject(err);
      console.log("1 document updated: " + JSON.stringify(user));
      resolve();
    });
  });
  return promise;
}

function deleteUser(id) {
  const promise = new Promise((resolve, reject) => {
    const query = { id: id };
    console.log("Deleting ", query);
    collection.deleteOne(query, (err, obj) => {
      if (err) reject(err);
      console.log("1 document deleted: " + isbn);
      resolve();
    });
  });
  return promise;
}

// Export functions from Module
module.exports = {getAllUsers, addUser, updateUser, deleteUser};