// Simple hello world echo REST server
const restify = require('restify');

// Set up restify server
const server = restify.createServer();
const router = new (require('restify-router')).Router();

// Define a call back functin to use with get request
server.get('/hello/:name', (req, res, next) => {
    res.send('hello ' + req.params.name);
    next();
  });

// Set server to listen to port 8080
server.listen(8080, function() {
  console.log('see - http://localhost:8080/hello/John');
});