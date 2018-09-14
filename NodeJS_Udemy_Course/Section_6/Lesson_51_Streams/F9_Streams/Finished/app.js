var fs = require('fs');

//***1. Without encoding, loads all of the buffer.***
var readable0 = fs.createReadStream(__dirname + '/greet.txt');

readable0.on('data', function(chunk) {
	console.log(chunk);
});


//***2.with encoding utf8, bufferSize is 16kb***
var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

// *** 3. create a writeStream, so we can write, modify the stream data, we are copying the data to an other txt
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

//The stream will will a buffer with a content.
//If the buffer is smaller than the size of the file, you will get chunks of data.
//Since streaming, fs is an extended EventEmitter, you have the properties of it, you can emit.
readable.on('data', function(chunk) {
	console.log(chunk);
	console.log(chunk.lenght);
	writable.write(chunk);
});