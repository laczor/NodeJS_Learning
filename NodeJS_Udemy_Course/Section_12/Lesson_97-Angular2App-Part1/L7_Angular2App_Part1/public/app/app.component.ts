import { Component } from '@angular/core';                              //To tell angular, that we are creating a component
import { Todo } from './todo';                                          //To do class
import { TodoService } from './todo.service';                           //It is a service, to get async data with http request

@Component({
  selector: 'my-app',                                                   //This is the element selector, + html template which will be generated to this component
  template: `<h1>NodeTodo</h1>                                          
  <ul>
      <li *ngFor="let todo of todos">
        {{todo.todo}} - {{todo.isDone}}
      </li>
    </ul>`,
  providers: [ TodoService ]                                            //We are injecting a seperate service object to this component
})
export class AppComponent  {                                            //Declaring the component
  todos: Todo[];                                                        //Inner state of the component
  constructor(private todoService: TodoService) { }
  getTodos(): void {
    this.todoService.getTodos().then(todos => this.todos = todos);      //Initate the http request service, then when it is returned, store the recieved values to the inner state
  }
  ngOnInit(): void {                                                    //When the component is initated, it should starte fetching data
    this.getTodos();
  }
}
