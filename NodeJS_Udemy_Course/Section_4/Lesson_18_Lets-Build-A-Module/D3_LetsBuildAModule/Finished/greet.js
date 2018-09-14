//We write the code, storing in a variable, memory space
var greet = function() {
	console.log('Hello!');
};

//We want to make the attached object available to use outside the module
module.exports = greet;

