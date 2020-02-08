// Simple hello world echo REST server
var restify = require('restify');

// Set up restify server
var server = restify.createServer();

// Define a call back functin to use with get request
server.get('/hello/:name', (req, res, next) => {
    res.send('hello ' + req.params.name);
    next();
  });

// Set server to listen to port 8080
server.listen(8080, function() {
  console.log('see - http://localhost:8080/hello/John');
});