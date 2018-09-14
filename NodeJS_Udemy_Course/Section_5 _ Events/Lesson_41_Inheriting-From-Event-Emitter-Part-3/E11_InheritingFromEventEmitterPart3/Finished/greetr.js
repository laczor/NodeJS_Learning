//So here we are importing the EventEmitter object,
// We are extending it, making the  EventEmitter object a prototype of the new Greetr object
//Which has all of the prototype properties using super()
//+ we are adding a custom method
'use strict';

var EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
	constructor() {
		super();
		this.greeting = 'Hello world!';
	}
	
	greet(data) {
		console.log(`${ this.greeting }: ${ data }`);
		this.emit('greet', data);
	}
}