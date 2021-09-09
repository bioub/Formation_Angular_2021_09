import { Component, OnInit } from '@angular/core';

import { Todo } from './shared/todo.model';

@Component({
  selector: 'my-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [{
    id: 1,
    title: 'Pain',
    completed: false,
  }, {
    id: 2,
    title: 'Lait',
    completed: true
  }];

  // todos: Todo[] = (new Array(2000)).fill({}).map(() => ({title: 'ABC'}));

  constructor() {}

  ngOnInit(): void {
  }

  addTodo(todo: Todo) {
    // Ne pas utiliser en stratégie OnPush
    // Méthode muable (modifie l'objet d'origine)
    // this.todos.push(todo);

    // A utiliser en stratégie OnPush
    // Version Immuable (on créé un nouvel objet)
    this.todos = [...this.todos, todo];
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
