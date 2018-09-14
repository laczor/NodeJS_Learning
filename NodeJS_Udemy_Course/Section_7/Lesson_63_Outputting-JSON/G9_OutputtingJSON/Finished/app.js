// 1. We notify the reciever that we are returnin json in the header
// 2. Create an object literal,
// 3. Responding the transformed object literal to JSON.

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var obj = {
        firstname: 'John',
        lastname: 'Doe'
    };
    res.end(JSON.stringify(obj));
    
}).listen(1337, '127.0.0.1');