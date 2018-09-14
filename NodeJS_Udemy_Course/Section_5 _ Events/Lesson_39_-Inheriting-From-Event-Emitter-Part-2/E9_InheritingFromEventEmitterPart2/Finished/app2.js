var util = require('util');

function Person() {
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function() {
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman() {
	console.log("Policeman Constructor");
	console.log(this);			//It is an empty object, created by this functional constructor
	Person.call(this);			//Passing the object reference to the borrowed function from the other
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
console.log(officer);
console.log(officer.badgenumber);