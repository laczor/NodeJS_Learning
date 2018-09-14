/***
 * Excerpted from "Node.js the Right Way",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/jwnode for more book information.
***/
"use strict";


//So what we doo here is we instantiate this Client object function with the new keyword
//We listen to the .on("data") method of the passed stream object
//Then since we called the EventEmitter function on this, we have the intheritance from the EventEmitter object
//Thus we can call self.emit --> to notify the nodeJS evente emmitter to execute some function

const events = require('events'),  util = require('util'),
    // client constructor, it is a function which is waiting a stream parameter

  LDJClient = function(stream) {

    events.EventEmitter.call(this);         //So we start the inheritence by calling an EventEmitter constructor function on "this"  super()
    let   self = this, buffer = '';

    stream.on('data', function(data) {

      buffer += data;
      let boundary = buffer.indexOf('\n');

      while (boundary !== -1) {

        let input = buffer.substr(0, boundary);
        buffer = buffer.substr(boundary + 1);
        self.emit('message', JSON.parse(input));
        boundary = buffer.indexOf('\n');

      }

    });

  };

util.inherits(LDJClient, events.EventEmitter);   //class LDJClient inherits from EventEmitter

// expose module methods
exports.LDJClient = LDJClient;

exports.connect = function(stream){
  return new LDJClient(stream);
};

