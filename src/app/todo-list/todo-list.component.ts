import { Component, OnInit,APP_INITIALIZER } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { REMOVE_TODO, TOGGLE_TODO } from '../actions';
import { ITodo } from '../todo';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [
  ]
})
export class TodoListComponent implements OnInit {
  @select() todos;
  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    tag: "",
    isCompleted: false
  };
  constructor(private ngRedux: NgRedux<IAppState>) {
  }
  ngOnInit() {
  }
  toggleTodo(todo) {
    console.log('asdfdfdsf');
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }
  removeTodo(todo) {
    this.ngRedux.dispatch({type: REMOVE_TODO, id: todo.id });
  }
}
