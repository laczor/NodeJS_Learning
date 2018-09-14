import { NgModule }      from '@angular/core';					//Using the imported modules fo rht AppModule
import { BrowserModule } from '@angular/platform-browser';		// for the router
import { HttpModule }    from '@angular/http';					// to make http request

import { AppComponent }  from './app.component';				//The basic component

@NgModule({
  imports:      [ BrowserModule, HttpModule ],					//Seperate modules, have to be imported
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]								//This is the basic Appcomponent
})
export class AppModule { }
