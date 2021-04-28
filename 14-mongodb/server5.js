const mongo = require("mongodb");
const client = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017";

client.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (err) throw err;

  const query = { id: 123 };
  client
    .db("userdb")
    .collection("users")
    .find(query)
    .toArray()
    .then((results) => {
      console.log(results);
    })
    .catch ((error) => {
      console.log(error);
    })
    .finally(() => {
      client.close();
    })


});
