const express = require("express");
const app = express();
// To allow body to be parsed
const bodyParser = require("body-parser");

// avoid hard coding the path
const path = require('path')

// Load configuration information
const config = require(path.resolve(__dirname,'config/default'));

// Load user route definitions
const users = require(path.resolve(__dirname,'controllers/users'));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up routing for our services
const router = express.Router();

// Log all messages sent to the server
router.use(function(req, res, next) {
  console.log("Received req.url: " + req.url);
  next(); // make sure we go to the next routes and don't stop here
});

// Set up default route - useful for testing
router.get("/", function(req, res) {
  res.json({ message: "Welcome" });
});

router
  .route("/users")
  .get(users.getUsers)
  .post(users.postUser)
  .put(users.updateUser);

router
  .route("/users/:id")
  .get(users.getUser)
  .delete(users.deleteUser);

// All routes will be prefixed with /api
app.use("/api", router);

// Start listening on default Port
app.listen(config.port, () => {
  console.log("Server Running - http://localhost:8080");
});

module.exports = app // For tsting purposes