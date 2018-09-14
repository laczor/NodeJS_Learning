//Pipes are accessible methods on readable streams.

var fs = require('fs');
var zlib = require('zlib');								//Allows us to implement to a gzip file, a particular algorytm to compress files

//Read a text from the stream, buffer
var readable = fs.createReadStream(__dirname + '/greet.txt');
//Write data in a stream and create txt
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');
//Writable stream, returns a zipped file
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
//compress the data with algorythmí
var gzip = zlib.createGzip();

//We read the data, then redirect it to the writable stream, which will makea copy of txt
readable.pipe(writable);

//Since pipes are chainable, we can pipe different streams
//From the read data, we create a comporessed version, then since we are in a readable & writeable stream, we create a writeable stream, which will create a zip file.
readable.pipe(gzip).pipe(compressed);
