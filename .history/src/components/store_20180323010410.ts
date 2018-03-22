// import {action} from 'mobx/lib/mobx';
import { /* extendObservable, */ action, observable, computed } from 'mobx';

class TodoList { 
  
  [x: string]: any;
  @observable todos: any[] = [];

  @action
  removeTodo(_todo: any) {
    this.todos = this.todos.slice().filter(p => p.id !== _todo.id);
  };

  @action
  add(_value) {
    this.todos.push(new Todo(_value))
  }
 
  @computed get unfinishedTodoCount() {
    return this.todos.slice().filter(todo => !todo.finished).length
  }

  // constructor() {
   
  //   extendObservable(this, {
      
  //     // add: action(function add (_value) {
  //     //   this.todos.push( new Todo(_value))
  //     // }),
      
  //     removeTodo : action(function removeTodo)
  //   })
  // }
}


class Todo {
  
  @observable id: any = Math.random();
  @observable createdOn: any = new Date().getTime()
  @observable completedOn: any
  
  @observable title: any;
  @observable finished: boolean;
  @action
  toggleState() {
    this.finished = !this.finished
    this.completedOn = this.finished ? new Date().getTime() : undefined
  }

  constructor(_title) {
    this.title = _title;
    this.finished = false;
    // extendObservable(this, {
    //   title: _title,
    //   finished: false,
    //   // toggleState: action(function toggleState() {
    //   //   this.finished = !this.finished
    //   //   this.completedOn = this.finished  ? new Date().getTime() : undefined
    //   // })
    // })

    // this.id = Math.random()
    // this.createdOn = new Date().getTime()

  }
}



// class Todo {
//   id: any
//   createdOn: any
//   completedOn: any
//   constructor(_title) {
//     extendObservable(this, {
//       title: _title,
//       finished: false,
//       toggleState: action(function toggleState() {
//         this.finished = !this.finished
//         this.completedOn = this.finished ? new Date().getTime() : undefined
//       })
//     })
//     this.id = Math.random()
//     this.createdOn = new Date().getTime()
//   }
// }

// class Todo {
//   id: any
//   createdOn: any
//   completedOn: any
//   constructor(_title) {
//     extendObservable(this, {
//       title: _title,
//       finished: false,
//       toggleState: action(function toggleState() {
//         this.finished = !this.finished
//         this.completedOn = this.finished ? new Date().getTime() : undefined
//       })
//     })

//     this.id = Math.random()
//     this.createdOn = new Date().getTime()

//   }
// }





let store: TodoList;
const getStore = ()=> {
  if (!store) {
    store = new TodoList()
  }
  return store;
}
export default getStore();