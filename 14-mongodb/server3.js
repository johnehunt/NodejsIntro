// Example illustrates inserting a single document

const mongo = require("mongodb");

console.log("Setting up Mongodb client");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017";

// set up function to be used to insert one document
function insertDocuments(err, client) {
  if (err) throw err;

  console.log("Connecting to userdb database with users collection");
  const userdb = client.db("userdb");
  const collection = userdb.collection("users");

  console.log("Add an entry into the collection");
  const user = { id: 333, name: "Denise Byrne" };
  collection
    .insertOne(user)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      client.close();
    });
}

// connect and run function
console.log("Connecting to Server");
MongoClient.connect(
  url, 
  { useUnifiedTopology: true, poolSize: 10 }, 
  insertDocuments
);
