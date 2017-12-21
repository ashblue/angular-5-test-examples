import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import {VoterComponent} from './e2e/1-voter/voter.component';
import {TodosComponent} from './e2e/2-todos/todos.component';
import {UserDetailsComponent} from './e2e/3-user-details/user-details.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    VoterComponent,
    GreeterComponent,
    UserDetailsComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
