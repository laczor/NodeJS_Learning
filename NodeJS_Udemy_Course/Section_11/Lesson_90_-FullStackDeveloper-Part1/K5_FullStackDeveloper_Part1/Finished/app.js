var express = require('express');										// for building the web server
var app = express();													//Creating the object

var port = process.env.PORT || 3000;									//Seting the port, or using enviromental variable

var people = [															//Array of people stored
	{
		name: 'John Doe'
	},
	{
		name: 'Jane Doe'
	},
	{
		name: 'Jim Doe'
	}
];

app.set('view engine', 'ejs');											//Engine template specification
app.use('/assets', express.static(__dirname + '/public'));				//Public storage place sepcification

app.get('/', function(req, res) {										//Basic 1 route
		
	res.render('index', { serverPeople: people });
	
});

app.listen(port);														//activating express app by listening to any events on the declared port