var greet = require('./greet');			//not working, since we los the original reference
var greet2 = require('./greet2');		//Working since, we kept the original ojbect reference
greet2.greet();