// Simple hello world echo REST server
const restify = require("restify");
const router = new (require('restify-router')).Router();

// Set up restify server
const server = restify.createServer({
	name: 'bookshop',
	version: '1.0.0',
});

const home = require("./routes/home");

server.use(restify.plugins.throttle({
	burst: 100,  	// Max 10 concurrent requests (if tokens)
	rate: 2,  		// Steady state: 2 request / 1 seconds
	ip: true,		// throttle per IP
}));
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.gzipResponse());

router.add("/api", home);
router.applyRoutes(server);

// Set server to listen to port 8080
server.listen(8080, () => {
  console.log("see - http://localhost:8080/api/ or http://localhost:8080/api/1234");
});

// Handle any uncaught exceptions
server.on('uncaughtException', (req, res, route, err) => {
	console.error(err);
});