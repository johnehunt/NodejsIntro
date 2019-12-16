console.log('Starting HTTP Server')

const http = require('http');

const server = http.createServer(function (req, res) {
    console.log('Handling', req.url)
    if (req.url == '/contact')
        res.write('<h1>Contacts</h1><p> Contact Info.</p>')
    else if (req.url == '/about')
        res.write('<h1>About</h1><p>This is the about page.</p>')
    else if (req.url == '/help')
        res.write('<h1>Help</h1><p>This is the Help page.</p>')
    else if (req.url == '/')
        res.write('<h1>Hello World!</h1><p>Welcome Everyone.</p>')
    else {
        res.writeHead(404)
        res.write('page not found')
    }
    res.end(); 
  })

console.log('Listening on port 8080')
server.listen(8080);

console.log('Started')