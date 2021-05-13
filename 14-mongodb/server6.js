// Example illustrates querying for a list of coduments and sorting the reuslts
const mongo = require("mongodb");

console.log("Setting up Mongodb client");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017";

console.log("Connecting to the Mongodb server");
MongoClient.connect(
  url,
  { useUnifiedTopology: true, poolSize: 10 },
  function (err, client) {
    if (err) throw err;
    const userdb = client.db("userdb");
    const mysort = { name: 1 };

    console.log("Running query and sort");
    userdb
      .collection("users")
      .find({})
      .sort(mysort)
      .toArray()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        client.close();
      });
  }
);
