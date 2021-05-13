// Example illustrates querying for a single document

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017";

MongoClient.connect(
  url,
  { useUnifiedTopology: true, poolSize: 10 },
  function (err, client) {
    if (err) throw err;
    const userdb = client.db("userdb");
    const query = { id: 333 };

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
  }
);
