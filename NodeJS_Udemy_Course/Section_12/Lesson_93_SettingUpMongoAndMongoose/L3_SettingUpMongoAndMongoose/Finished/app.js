var express = require('express');
var app = express();
var mongoose = require('mongoose');											//In order to work with mongoDB
var config = require('./config');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());							//Good Practice, to store them in a seperated Module

app.listen(port);