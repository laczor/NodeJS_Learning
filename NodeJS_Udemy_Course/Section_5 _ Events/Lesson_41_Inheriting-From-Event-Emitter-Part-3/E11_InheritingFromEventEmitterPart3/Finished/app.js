//Creating a Greetr object, from the extended EventEmitter object class, than assign an event emitter to it
//And i the  Greetr object's greet() function, we are emitting the event, so it will be triggered.

'use strict';

var Greetr = require('./greetr');

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');