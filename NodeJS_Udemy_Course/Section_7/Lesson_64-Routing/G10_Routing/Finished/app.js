var http = require('http');
var fs = require('fs');

//Listening to the req.url string,    
http.createServer(function(req, res) {
//Simply, read the file in a readable stream and return the response in a readable/writeable stream    
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }
//Retruning JSON    
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
//Sending the not found response.    
    else {
        res.writeHead(404);
        res.end();
    }
    
}).listen(1337, '127.0.0.1');