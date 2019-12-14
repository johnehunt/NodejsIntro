console.log('Starting Server')

const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1><p>Welcome Everyone.</p>'); //write a response to the client
    res.end(); //end the response
  })

console.log('Listening on port 8080')
server.listen(8080);

console.log('Started')