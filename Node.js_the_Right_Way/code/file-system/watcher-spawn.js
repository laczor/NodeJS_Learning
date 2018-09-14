/***
 * Excerpted from "Node.js the Right Way",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/jwnode for more book information.
***/


//Child processes --> https://www.youtube.com/watch?v=ojeiaroDQW8
//https://dzone.com/articles/understanding-execfile-spawn-exec-and-fork-in-node


"use strict";
const
  fs = require('fs'),
  spawn = require('child_process').spawn,
  filename = process.argv[2];

if (!filename) {
  throw Error("A file to watch must be specified!");

}
//So we create a child process with spawn
// Then we execute the following linux command --> ls -lh target.txt --> it will write out the filename with all if its long properties
//-lh are flags for the "ls" command --> https://en.wikipedia.org/wiki/Ls


fs.watch(filename, function() {
  let ls = spawn('ls', ['-lh', filename]);

  // stdout --> standardOutputObject
  // pipe  --> Will control the outPut stream from the child process to the main process's outPutObject stream.
  // So in reallity we make read the files with ls + flags in a child process, then we share it through a pipe with the main process which will be resulted directly without any controll.
  ls.stdout.pipe(process.stdout);
});
console.log("Now watching " + filename + " for changes...");


