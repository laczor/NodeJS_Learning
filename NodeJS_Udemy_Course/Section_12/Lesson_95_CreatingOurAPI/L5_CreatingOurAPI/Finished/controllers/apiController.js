var Todos = require('../models/todoModel');               //Using the object model
var bodyParser = require('body-parser');                  //Encoding recieved information

module.exports = function(app) {
    
    app.use(bodyParser.json());                           //To exctract data from http request body
    app.use(bodyParser.urlencoded({ extended: true }));   // To exctact data from the encoded URL of GET request

//It is to fetch the whole todo  list of the specific user
    app.get('/api/todos/:uname', function(req, res) {
        
        Todos.find({ username: req.params.uname }, function(err, todos) {
            if (err) throw err;
            
            res.send(todos);
        });
        
    });
// It is to fetch a specific todo, with the to do id,   
    app.get('/api/todo/:id', function(req, res) {
       
       Todos.findById({ _id: req.params.id }, function(err, todo) {
           if (err) throw err;
           
           res.send(todo);
       });
        
    });
// it is to post a tod id, find in the database and post if it can be found  
    app.post('/api/todo', function(req, res) {
        
        if (req.body.id) {
            Todos.findByIdAndUpdate(req.body.id, { todo: req.body.todo, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment }, function(err, todo) {
                if (err) throw err;
                
                res.send('Success');
            });
        }
        
        else {
//If not, you can just create a new one with the Todos Object Model           
           var newTodo = Todos({
               username: 'test',
               todo: req.body.todo,
               isDone: req.body.isDone,
               hasAttachment: req.body.hasAttachment
           });
           newTodo.save(function(err) {
               if (err) throw err;
               res.send('Success');
           });
            
        }
        
    });
//Delete with when it can find it.    
    app.delete('/api/todo', function(req, res) {
        
        Todos.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })
        
    });
    
}