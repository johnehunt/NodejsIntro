// Example illustrates connecting to a Mondodb server

const mongo = require("mongodb");
console.log('Setting up mongo client');

const MongoClient = mongo.MongoClient;

// {useUnifiedTopology: true},  - ensures new server discovery and monitoring engine is used 
// original is deprecated but used by default

console.log('Connecting to Mongodb Server')
const url = "mongodb://127.0.0.1:27017";
MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
  if (err) throw err;
  console.log("Connected to Mongo Database!");
  client.close();
});

// Or to use connection pooling
// MongoClient.connect(url, {  poolSize: 10 },function(err, client) {
//   if (err) throw err;
//   console.log("Connected to Mongo Database!");
//   client.close();
// });