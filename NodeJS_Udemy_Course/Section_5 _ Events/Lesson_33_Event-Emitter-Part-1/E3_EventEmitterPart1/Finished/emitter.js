//Function constructor, which is basically an events object

function Emitter() {
	this.events = {};
}

// variable = conditional || false conditional
//Adding a function to the prototype, which put the type in the type array, and a code to be executed (hash:Table)
Emitter.prototype.on = function(type, listener) {
	this.events[type] = this.events[type] || [];	  // if the poperty exist, than that is all great, if not, creat an empty array
	this.events[type].push(listener);				  // We put an code into the array, to be executed when that event happened
}

//TO say that sth happened, we get the type of the event, and we are looping through the array of the selected event
Emitter.prototype.emit = function(type) {
	if (this.events[type]) {
		this.events[type].forEach(function(listener) {
			listener();
		});
	}
}
//Creating a simple module
module.exports = Emitter;