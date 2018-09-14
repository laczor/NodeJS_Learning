//We are not referencing the folder, it will look at the utility core folder
var util = require('util');

var name = 'Tony';
var greeting = util.format('Hello, %s', name);
util.log(greeting);