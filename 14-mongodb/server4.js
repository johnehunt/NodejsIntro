const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (err) throw err;
  const userdb = client.db("userdb");
  const query = { id: 123 };

  userdb
    .collection("users")
    .findOne(query)
    .then((result) => {
      console.log(result.name);
    })
    .catch((errorMessage) => {
      console.log(errorMessage);
    })
    .finally(() => client.close());
    
});
