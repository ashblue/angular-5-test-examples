import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import {VoterComponent} from './e2e/1-voter/voter.component';
import {TodosComponent} from './e2e/2-todos/todos.component';
import {UserDetailsComponent} from './e2e/3-user-details/user-details.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './e2e/home/home.component';
import {UsersComponent} from './e2e/users/users.component';
import {TodoService} from './e2e/2-todos/todo.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { NavComponent } from './e2e/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    VoterComponent,
    GreeterComponent,
    UserDetailsComponent,
    TodosComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
