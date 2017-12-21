/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
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

  it('should load todos from the server', () => {
    const service = TestBed.get(TodoService);
    spyOn(service, 'getTodos').and.returnValue(Observable.from([[1, 2, 3]]));

    fixture.detectChanges();

    expect(component.todos.length).toBe(3);
  });
});
