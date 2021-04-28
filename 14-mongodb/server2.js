// Example illustrate show to create a collection

const mongo = require("mongodb");

console.log('Setting up Mongodb client');
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017";

console.log('Connecting to Server');
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
  if (err) throw err;
  console.log('Connecting to userdb database');
  const database = client.db("userdb");

  console.log('Creating the users collection');
  database.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    client.close();
  });

  console.log('Done');
});
