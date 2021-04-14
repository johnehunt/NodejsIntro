const express = require("express");
const app = express();
// To allow body to be parsed pre Express 4.16
// const bodyParser = require("body-parser");

// avoid hard coding the path
const path = require("path");

// Load configuration information
const config = require(path.resolve(__dirname, "config/default"));

// Load user route definitions
const controller = require(path.resolve(__dirname, "controllers/users"));

// configure app to use bodyParser() pre 4.16
// this will let us get the data from a POST
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

// Configure express to handle json body content
// express 4.16 and newer
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

// Set up routing for our services
const router = express.Router();

// Add logging middleware
// to log all messages sent to the server
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
  .get(controller.getUsers)
  .post(controller.postUser)
  .put(controller.updateUser);

router
  .route("/users/:id")
  .get(controller.getUser)
  .delete(controller.deleteUser);

// All routes will be prefixed with /api
app.use("/api", router);

// Start listening on default Port
app.listen(config.port, () => {
  console.log("Rest Server Running - http://localhost:" + config.port);
});
