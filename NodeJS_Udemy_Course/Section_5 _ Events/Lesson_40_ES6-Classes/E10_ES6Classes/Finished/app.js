'use strict';

//We have the base object, with the constructor function, with a greet metho
class Person {
	constructor(firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
	}
	
	greet() {
		console.log('Hello, ' + this.firstname + ' ' + this.lastname);
	}
}

//We can just simply use it's function
var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);			//The prototype of the created classes are the same


class Policeman extends Person {
  constructor(firstname, lastname) {			//This is for passing in properties
    super(firstname, lastname);					//Borrowing the extended object's properties, methods
    this.badgnumber = '1234';
  }

  getBadge() {									//Adding custom method to the new object only
  	console.log(this.badgnumber);

  }
}

let officer = new Policeman("Police","John");
console.log(john);
console.log(officer);
officer.getBadge();
officer.greet();
