const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://localhost:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (err) throw err;
  const userdb = client.db("userdb");
  const query = { id: 123 };
  userdb
    .collection("users")
    .deleteOne(query)
    .then((obj) => {
      console.log("1 document deleted");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => client.close());
});
