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
  net = require('net'),
  ldj = require('./ldj.js'),
  
  netClient = net.connect({ port: 5432 }),      //This is a net Object, to listen for the incomming request and on.("data") method to execute some callback
  ldjClient = ldj.connect(netClient);           //THis is our created module, to listen for the on.("data"), intehrit from EventEmitter and emmit "message" event.

ldjClient.on('message', function(message) {     //Since ldjClient is a child of the EventEmitter, it will be able to listen to any emmitted event especially "message" event
  if (message.type === 'watching') {
    console.log("Now watching: " + message.file);
  } else if (message.type === 'changed') {
    console.log(
      "File '" + message.file + "' changed at " + new Date(message.timestamp)
    );
  } else {
    throw Error("Unrecognized message type: " + message.type);
  }
});
