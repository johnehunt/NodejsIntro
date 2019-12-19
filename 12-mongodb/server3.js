const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;
  const userdb = client.db("userdb");
  const collection = userdb.collection("users");

  const user = { id: 1234, name: "John Smith" };
  collection.insertOne(user, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  collection.insertMany(
    [
      { id: 111, name: "Adam Jones" },
      { id: 222, name: "Eloise Moore" }
    ],
    function(err, result) {
      if (err) throw err;
      console.log("Inserted 3 documents into the collection");
    }
  );

  client.close();

});
