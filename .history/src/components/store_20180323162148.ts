import { action, observable, computed } from 'mobx';

class TodoList {

  [x: string]: any;
  @observable todos: any[] = [];

  @action removeTodo(_todo: Todo) {
    this.todos = this.todos.slice().filter(p => p.id !== _todo.id);
  }
  @action add(_value: Todo) {
    this.todos.push(new Todo(_value))
  }
  @computed get unfinishedTodoCount() {
    return this.todos.slice().filter((_todo: Todo) => !_todo.finished).length
  }
}


class Todo {

  @observable id: any = Math.random();
  @observable createdOn: any = new Date().getTime()
  @observable completedOn: any

  @observable title: any;
  @observable finished: boolean;
  @action toggleState() {
    this.finished = !this.finished
    this.completedOn = this.finished ? new Date().getTime() : undefined
  }

  constructor(_title: ) {
    this.title = _title;
    this.finished = false;
  }
}





let store: TodoList;
const getStore = (): TodoList => {
  if (!store) {
    store = new TodoList()
  }
  return store;
}
export default getStore();