//We are mutating the object, by adding a new property to the export object
exports.greet = function() {
	console.log('Hello');
};

console.log(exports);       // {}		   //They are poiting to the same function
console.log(module.exports);// {}   