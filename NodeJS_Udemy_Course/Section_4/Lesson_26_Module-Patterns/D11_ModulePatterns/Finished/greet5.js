//Revealing.We are only exposing the function, reveal to outside of the module

var greeting = 'Hello world!!!!';

function greet() {
	console.log(greeting);
}
//When this is executed, it will still have access to greetin variable, but outside of the module we have no reference
module.exports = {
	greet: greet
}