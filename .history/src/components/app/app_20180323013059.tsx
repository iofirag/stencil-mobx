import { Component, State } from '@stencil/core';
// import {store} from '../store';
import { autorun, observable } from 'mobx';
import store from '../store'
// import { observable } from "mobx"


@Component({
    tag: 'my-app',
    //styleUrl: 'my-name.scss'
})
export class App {

    @observable @State() todos: Todo
    @observable @State() title: string

    constructor() {

        autorun(() => {
            // console.log(store)
            console.log(store.unfinishedTodoCount)
            this.todos = store.todos.slice()
        })
    }

    renderTodos = () => {
        return this.todos ? this.todos.map((m) => {
            return (
                <div>{m.title} {m.createdOn}  
                    <button onClick={() => { 
                                m.toggleState(); 
                                console.log(m); 
                                store.removeTodo(m)}
                                }> Remove </button>
                </div>
            );
        }) : null
    }

    render() {
        return (
            <div class="section">
                <my-header></my-header>
                <div class="level">
                    <div class="level-item">
                        <button class="button" onClick={() => store.add(this.title)}>ADD</button>
                        <input class="input" placeholder="enter the title" onChange={(e: any) => {
                            this.title = e.target.value
                            // console.log(e.target.value)
                        }} />
                    </div>
                    <h4 class="level-item">Unfinished: {store.unfinishedTodoCount}</h4>
                </div>
                {this.renderTodos()}
            </div >
        )
    }
}
