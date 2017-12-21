import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import {VoterComponent} from './e2e/1-voter/voter.component';
import {TodosComponent} from './e2e/2-todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    GreeterComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
