#!/usr/bin/env node --harmony
/***
 * Excerpted from "Node.js the Right Way",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/jwnode for more book information.
***/

//This is the code which will run it --> node --harmony cat.js target.txt

// It will create a readAblteStream from the third parameter of the linux command, and will direct it to the main process's outOutObject
require('fs').createReadStream(process.argv[2]).pipe(process.stdout);
