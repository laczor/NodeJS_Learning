var mongoose = require('mongoose');								//In order to use schema

var Schema = mongoose.Schema;									//Creating schemas

var todoSchema = new Schema({									//Basic Schema object			
    username: String,											
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var Todos = mongoose.model('Todos', todoSchema);				//Creating a model from the schema

module.exports = Todos;											//Exporting the created model