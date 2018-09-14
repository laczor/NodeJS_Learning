//In order use streams, for better performance
//We are reading the html, and creating a writeable response stream
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
    
}).listen(1337, '127.0.0.1');
