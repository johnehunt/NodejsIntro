const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const URL = "mongodb://127.0.0.1:27017";
const DATABASE_NAME = "userdb";
const COLLECTION_NAME = "users";
let collection;

function setupMongoConnection() {
  return MongoClient
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((client) => {
      const database = client.db(DATABASE_NAME);
      collection = database.collection(COLLECTION_NAME);
      console.log(
        "Connected to '" +
          DATABASE_NAME +
          "' using collection " +
          COLLECTION_NAME
      );
    })
    .catch((err) => {
      console.err("Problem connecting to MongoDB");
      throw err;
    });
}

// Define models functions

function getAllUsers() {
  console.log("model.getAllUsers()");
  return collection.find().toArray();
}

// function getAllUsers() {
//   console.log("model.getAllUsers()");
//   const promise = new Promise((resolve, reject) => {
//     collection.find().toArray((err, users) => {
//       if (err) reject(err);
//       console.log("model.getAllBooks() - setting resolve");
//       resolve(users);
//     });
//   });
//   return promise;
// }

function addUser(user) {
  return collection.insertOne(user);
}

function updateUser(user) {
  const query = { id: user.id };
  const newValues = { $set: user };
  return collection.updateOne(query, newValues);
}

function deleteUser(id) {
  const query = { id: id };
  console.log("Deleting ", query);
  return collection.deleteOne(query);
}

// Export functions from Module
module.exports = { getAllUsers, addUser, updateUser, deleteUser, setupMongoConnection };
