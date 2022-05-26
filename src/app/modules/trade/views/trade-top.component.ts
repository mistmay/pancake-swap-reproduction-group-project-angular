import { Component } from '@angular/core';

@Component({
    selector: 'app-trade-top',
    template: `
    <app-hero-nav [heroNav]="[
    {name: 'Swap', link: '/trade/exchange'},
    {name: 'Limit', link: '/trade/limit-order'},
    {name: 'Liquidity', link: '/trade/liquidity'}
    ]"></app-hero-nav>
   <router-outlet></router-outlet>
    `
})
export class TradeTopComponent {
    constructor() { }

}
