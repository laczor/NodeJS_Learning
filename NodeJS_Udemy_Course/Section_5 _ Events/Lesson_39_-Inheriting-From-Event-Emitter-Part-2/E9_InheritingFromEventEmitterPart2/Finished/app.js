var EventEmitter = require('events');
var util = require('util');

//Basically, we are passing the ojbect reference of eventEmeitter, and we are adding objects to the 
function Greetr() {
	EventEmitter.call(this);		//super constructor, inheriting all of the properties, when using util.inheriting
									//"this" is a reference to the newly created Greet object
	this.greeting = 'Hello world!';
}

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