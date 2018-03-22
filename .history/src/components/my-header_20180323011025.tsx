import { Component, State } from '@stencil/core';
import store from './store'
import { autorun } from 'mobx';

@Component({
    tag: 'my-header',
    styleUrl: 'my-header.scss'
})
export class HeaderComponent {
    @State() unfinishedTodoCountState: number;

    constructor() {
        autorun(() => {
            this.unfinishedTodoCountState = store.unfinishedTodoCount;
        })
    // }
    
    render() {
        console.log('my-header ', this.unfinishedTodoCountState)
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