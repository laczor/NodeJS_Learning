//Since we are overwriting the exports object to point to a new function object, this will not pointing to the exports object
exports = function() {
	console.log('Hello');
}

console.log(exports);			//overwritten object
console.log(module.exports);	//Original object