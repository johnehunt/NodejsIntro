// Obtain the express applicaiton object
const express = require('express')
const app = express()

// Set up express server to listen on port 8080
app.listen(8080, () => {
    console.log('Server Running - http://localhost:8080')
})

// When a request is received run callback
app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello Express World!</h1><p>Welcome Everyone.</p>'); 
    res.end(); 
})