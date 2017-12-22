/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {TodosComponent} from './todos.component';
import {TodoService} from './todo.service';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpClientTestingModule} from '@angular/common/http/testing';

// NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [TodosComponent],
      providers: [TodoService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should load todos from the server', fakeAsync(() => {
    const service = TestBed.get(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    // Fixture changes must be called after the spy in order to let the spy hijack proceeding code
    fixture.detectChanges();

    tick(50);

    expect(component.todos.length).toBe(3);

    // If using async instead of fakeAsync
    // fixture.whenStable().then(() => {
    //   expect(component.todos.length).toBe(3);
    // });
  }));
});
