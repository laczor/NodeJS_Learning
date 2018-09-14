// In order to create http request/ parse responses
var http = require('http');	

//When that object is emitting an event, it will trigger a listener, a callback function.
// req --> request
// res --> stream, which we can write.
http.createServer(function (req, res) {

// Determining, the Head, to infrom, it will send text/plain data
  res.writeHead(200, {'Content-Type': 'text/plain'});
//  I am done sending, this will be the last thing to be sent.
  res.end('Hello World\n');

}).listen(1337, '127.0.0.1');  //Standard Local IP address
//localhost:1337

// 1. Create a response with the built in HTTP module
// 2. Tell node, on which port should it listen for the response.
