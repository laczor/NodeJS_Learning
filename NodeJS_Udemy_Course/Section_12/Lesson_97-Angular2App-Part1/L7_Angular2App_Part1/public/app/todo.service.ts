import { Injectable } from '@angular/core';					//Since we are injecting services into other services
import { Headers, Http } from '@angular/http';				//Making http request

import 'rxjs/add/operator/toPromise';						//Making a promise return				

import { Todo } from './todo';								//Import the TodoObject		

@Injectable()												//Since we inserting the http ojbect
export class TodoService {
  
  private headers = new Headers({'Content-Type': 'application/json'});	//telling angular that we are expecting json
  private todosApiUrl = '/api/todos/test';							    //seperately tell the api ulr
  
  constructor(private http: Http) { }
    
  getTodos(): Promise<Todo[]> {											//We are expeting a promise, which will hold arrays of TODO's
    return this.http.get(this.todosApiUrl)								//Getting
               .toPromise()												//We are getting a response, which we are transforming to a promise
               .then(response => response.json() as Todo[])				//Then we are returning the JSON and store the results
  }
}