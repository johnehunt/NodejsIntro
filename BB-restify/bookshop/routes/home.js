const router = new (require('restify-router')).Router();

router.get('/', function (req, res, next) {
	res.json({
		isbn: '1234',
		title: 'Node.js forever',
		author: 'John Hunt',
		genre: 'Technical',
		price: 12.99
	});
	next();
});

router.get('/:isbn', function (req, res, next) {
	console.log(req.params)
	res.json({
		isbn: req.params.isbn,
		title: 'JavaScript Unbound',
		author: 'John Hunt',
		genre: 'Technical',
		price: 15.99
	});
	next();
});

router.post('/', function (req, res, next) {
	res.json({
		message: `Added Book ${req.body.name}`,
		query: req.query
	});
	next();
});

module.exports = router