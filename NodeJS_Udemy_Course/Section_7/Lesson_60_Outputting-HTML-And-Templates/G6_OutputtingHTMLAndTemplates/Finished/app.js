// 1. We create the httprequest
// 2. We determine the content-type
// 3. We read the file, which will read it in little chunkgs, buffers.
// 4. We create are using a simple, string replace to put custom string into the html

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    res.writeHead(200, { 'Content-Type': 'text/html' });						//Header
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');				//Reading in 8 bits encoding
    var message = 'Hello world...';												//Custom message string
    html = html.replace('{Message}', message);									//Replacing string
    res.end(html);																//returning the html
    
}).listen(1337, '127.0.0.1');													//listen to the port


