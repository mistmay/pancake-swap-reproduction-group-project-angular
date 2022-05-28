import { Component } from '@angular/core';

@Component({
    selector: 'app-win-top',
    template: `
    <app-hero-nav [heroNav]="[
    {name: 'Trading Competition', link: '/win/competition'},
    {name: 'Lottery', link: '/win/lottery'}
    ]"></app-hero-nav>
    <router-outlet></router-outlet>
    `
})
export class WinTopComponent {
    constructor() { }

}
