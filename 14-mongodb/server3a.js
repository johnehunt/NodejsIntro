// Example illustrates inserting multiple documents

const mongo = require("mongodb");

console.log("Setting up Mongodb client");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017";

function insertDocuments(err, client) {
  if (err) throw err;

  console.log("Connecting to userdb database with users collection");
  const userdb = client.db("userdb");
  const collection = userdb.collection("users");

  collection
    .insertMany(
      [
        { id: 111, name: "Adam Jones" },
        { id: 222, name: "Jasmine Moore" },
      ])
    .then((result) => {
      console.log("Inserted 3 documents into the collection");
    })
    .catch((errorMessage) => {
      console.log(errorMessage);
    })
    .finally(() => client.close());

}

console.log("Connecting to Server");
MongoClient.connect(
  url, 
  { useUnifiedTopology: true, poolSize: 10 }, 
  insertDocuments
);
