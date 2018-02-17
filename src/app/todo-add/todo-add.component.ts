import { Component, OnInit,APP_INITIALIZER } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store';
import { ADD_TODO } from '../actions';
import { ITodo } from '../todo';
import { AppConfig } from '../app.config';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
  providers: [
    AppConfig, // <---- this line
  { provide: APP_INITIALIZER, useFactory: (config: AppConfig) => () => config.load(), deps: [AppConfig], multi: true }
  ]
})
export class TodoAddComponent implements OnInit {
  @select() todos;
  model: ITodo = {
    id: 0,
    description: "",
    responsible: "",
    tag: "",
    isCompleted: false
  };
  tags;
  constructor(private ngRedux: NgRedux<IAppState>, config: AppConfig) {
    var self = this;
    config.load().then(
    result => {
      console.log(config.getTags());
      var tags_json = config.getTags(),
        tags_array = tags_json["tags_array"];
      self.model.tag = tags_array[0];
      self.tags = tags_array;
    },
    error => {
      // вторая функция - запустится при вызове reject
      console.log("Rejected: " + error); // error - аргумент reject
    }
  );
  }
  ngOnInit() {
  }
  onSubmit() {
    this.ngRedux.dispatch({type: ADD_TODO, todo: this.model});
  }
}
