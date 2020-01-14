import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { TodoService } from 'src/app/services/todo.service';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    todoService = TestBed.get(TodoService);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should show todos', () => {
    spyOn(todoService, 'getTodo').and.returnValue(['Daniel', 'Opiyo', 'Zypii']);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.todo').length).toBe(3);
  });
});
