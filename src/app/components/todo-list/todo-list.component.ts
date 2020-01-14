import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  // property
  public todos = [];

  constructor(
    private todoService: TodoService
   ) { }

  ngOnInit() {
    this.todos = this.todoService.getTodo();
  }

}
