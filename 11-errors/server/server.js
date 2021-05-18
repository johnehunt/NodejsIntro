const express = require("express");
const app = express();

// avoid hard coding the path
const path = require("path");

// Load configuration information
const config = require(path.resolve(__dirname, "config/default"));

// Load user route definitions
const users = require(path.resolve(__dirname, "controllers/users"));

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

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

// Set up default error handler for Express
// Define last, after other app.use() and routes calls
// Note this function takes four arguments (err, req, res, next)
function logErrors(err, req, res, next) {
  console.log('LogErrors');
  next(err);
}
app.use(logErrors);

// Can have more then one error handler
app.use(function(err, req, res, next) {
  console.log('Anonymous error logger');
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start listening on default Port
app.listen(config.port, () => {
  console.log("Server Running - http://localhost:8080");
  console.log("To see errors - http://localhost:8080/api/users");
});

