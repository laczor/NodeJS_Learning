var Emitter = require('./emitter');

var emtr = new Emitter();

//put properties to the event object
emtr.on('greet', function() {
	console.log('Somewhere, someone said hello.');
});

emtr.on('greet', function() {
	console.log('A greeting occurred!');
});

//Execute the created array of listeners for the event.
console.log('Hello!');
emtr.emit('greet');