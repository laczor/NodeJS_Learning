// Building a simple web server

var express = require('express');
var app = express();						//This will be our webserver object

// process.env.PORT --->                    //If there is an Evniromental variable, it will be used. 
var port = process.env.PORT || 3000;

//Respond with html
app.get('/', function(req, res) {
	res.send('<html><head></head><body><h1>Hello world!</h1></body></html>');
});
//respond with json
app.get('/api', function(req, res) {
	res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);