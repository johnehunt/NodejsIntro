const mongo = require("mongodb");

console.log("Setting up Mongodb client");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017";

function insertDocuments(err, client) {
  if (err) throw err;

  console.log("Connecting to userdb database with users collection");
  const userdb = client.db("userdb");
  const collection = userdb.collection("users");

  console.log("Add an entry into the collection");
  const user = { id: 1234, name: "John Smith" };
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

console.log("Connecting to Server");
MongoClient.connect(
  url, 
  { useUnifiedTopology: true }, 
  insertDocuments);
