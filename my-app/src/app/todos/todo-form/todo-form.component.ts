import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Todo } from '../shared/todo.model';

@Component({
  selector: 'my-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  //title = 'Beurre';
  todo: Todo = {
    id: Math.random(),
    title: 'Beurre',
    completed: false,
  }
  @Output() add = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // emet la copie de l'objet et non la référence
    this.add.emit({...this.todo});
    this.todo.title = '';
  }
}
