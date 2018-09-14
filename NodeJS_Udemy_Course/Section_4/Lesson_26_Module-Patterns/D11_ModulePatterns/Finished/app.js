//We require the variable,pointing to te function
var greet = require('./greet1');
greet();
// We say explicitly, that we ar looking for the exported property of the module.export object
var greet2 = require('./greet2').greet;
greet2();

//We are importing and creating a new object, by importing the module, which returning a new object with the keyword of "new"
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!';

// Require stores, caches the  already exported modules,
// So by requiring it again, it will just create a reference to the already created object
var greet3b = require('./greet3');
greet3b.greet();

//If we want to have different objects, we can require the module, and use the "new" operator 
//So the exported stuff is the function constructor
var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();