console.log('Starting Server')

const http = require('http');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World!</h1><p>Welcome Everyone.</p>'); 
    res.end(); 
  })

console.log('Listening on port 8080')
server.listen(8080);

console.log('Started')