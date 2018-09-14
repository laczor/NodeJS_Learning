var EventEmitter = require('events');
var util = require('util');

//Functional constructor
function Greetr() {
	this.greeting = 'Hello world!';
}

// It will let you to share the EventEmitter's propert with the Greetr functional constructor
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');