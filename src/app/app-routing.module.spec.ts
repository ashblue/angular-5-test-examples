import {routes} from './app-routing.module';
import {UsersComponent} from './e2e/users/users.component';
import {fakeAsync, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from './e2e/home/home.component';
import {UserDetailsComponent} from './e2e/3-user-details/user-details.component';
import {TodosComponent} from './e2e/2-todos/todos.component';
import {Router} from '@angular/router';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';
import {Component} from '@angular/core';

@Component({ template: '<router-outlet></router-outlet>' })
class AppComponent {}

// @SRC https://codecraft.tv/courses/angular/unit-testing/routing/
// @SRC https://medium.com/burak-tasci/using-jasmine-framework-to-test-angular-router-b568a232efed
describe('app-routing', () => {
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.resetTestEnvironment();

    TestBed
      .initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())
      .configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        HomeComponent,
        UsersComponent,
        UserDetailsComponent,
        TodosComponent
      ]
    });

    router = TestBed.get(Router);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('should load the home page initially', fakeAsync(() => {
    expect(router.url).toBe('/');
  }));

  it('should navigate to the users page', fakeAsync(() => {
    router.navigate(['users'])
      .then(() => {
        expect(router.url).toBe('/users');
      }, () => {
        fail('Failed to open page');
      });
  }));
});
