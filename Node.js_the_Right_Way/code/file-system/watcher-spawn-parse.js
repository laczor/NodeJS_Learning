/***
 * Excerpted from "Node.js the Right Way",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/jwnode for more book information.
***/
"use strict";
const
  fs = require('fs'),
  spawn = require('child_process').spawn,
  filename = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified!");
}

//So we create a child process, which will execute the ls command,
//There is an event emitter as "data", the child process will return the data in chunks in a binary buffer, which is converted to string
//When th child process finishes it's process, the "close" event will be emmitted and the final output will be modified.

fs.watch(filename, function() {
  let ls = spawn('ls', ['-lh', filename]),
    output = '';

  ls.stdout.on('data', function(chunk){
    output += chunk.toString();
  });
  
  ls.on('close', function(){
    let parts = output.split(/\s+/);
    console.dir([parts[0], parts[4], parts[8]]);     //Filedata will be logged out
  });
});

console.log("Now watching " + filename + " for changes...");


