// We are using the function expression, and invoking the new keyword we create a new object
function Greetr() {
	this.greeting = 'Hello world!!';
	this.greet = function() {
		console.log(this.greeting);
	}
}

module.exports = new Greetr();