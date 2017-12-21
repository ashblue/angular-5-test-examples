import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './e2e/users/users.component';
import {UserDetailsComponent} from './e2e/3-user-details/user-details.component';
import {TodosComponent} from './e2e/2-todos/todos.component';
import {HomeComponent} from './e2e/home/home.component';

// @TODO Should have a 404 page for missing content
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserDetailsComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
