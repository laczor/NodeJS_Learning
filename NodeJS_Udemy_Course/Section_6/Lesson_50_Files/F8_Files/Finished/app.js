var fs = require('fs');
//When our file is loaded, it will load it to the buffer, than to the view, the it will be returned
//Synchronous call
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

//Async call, to execute a call, when it will be finised reading.
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err, data) {
	console.log(data);  //will read the binary data, and encode it in utf8
});

console.log('Done!');