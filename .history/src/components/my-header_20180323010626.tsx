import { Component } from '@stencil/core';
import store from './store'

@Component({
    tag: 'my-header',
    styleUrl: 'my-header.scss'
})
export class HeaderComponent {

    render() {
        console.log('my-header ' + store.unfinishedTodoCount)
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