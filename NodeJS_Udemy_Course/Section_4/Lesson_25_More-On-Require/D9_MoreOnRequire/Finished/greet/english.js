//Inject required modules into the functions
var greetings = require('./greetings.json');

var greet = function() {
	console.log(greetings.en);
}

module.exports = greet;