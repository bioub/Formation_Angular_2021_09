import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../shared/todo.model';

@Component({
  selector: 'my-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit, DoCheck {

  @Input() todo: Todo = {};
  @Output() delete = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    console.log('TodoItem checked');
  }

  deleteTodo() {
    this.delete.emit(this.todo);
  }
}
