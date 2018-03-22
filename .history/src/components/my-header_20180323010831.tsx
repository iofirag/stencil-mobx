import { Component } from '@stencil/core';
import store from './store'
import { autorun } from 'mobx';

@Component({
    tag: 'my-header',
    styleUrl: 'my-header.scss'
})
export class HeaderComponent {
    unfini
    constructor() {

        autorun(() => {
            // console.log(store)
            console.log(store.unfinishedTodoCount)
            this.todos = store.todos.slice()
        })
    }
    
    render() {
        console.log('my-header ', store.unfinishedTodoCount)
        return (
            [<h3>Router & Props Test w/Stencil </h3>,
            <stencil-route-link
                url="/" >
                Show Name
            </stencil-route-link>,
            <stencil-route-link
                url="/address" >
                Show Address
            </stencil-route-link>
            ])
    }
}