var express = require('express');
var app = express();


app.get('/', function(req, res) {
	res.send('Hello World!');
});

//Send a response in json format
app.get('/blocks', function(req, res) {
	res.redirect(301, '/parts'); //redirect response to a different route
								 // you can also permanently set the status code for a route
								 
	var blocks = ['Fixed', 'Movable', 'Rotating'];
	res.json(blocks);
});

app.listen(3000, function() {
	console.log('Listening on port 3000');
});