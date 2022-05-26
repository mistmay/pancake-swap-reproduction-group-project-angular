import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nfts-top',
    template: `
    <app-hero-nav [heroNav]="[
    {name: 'Overview', link: '/nfts/overview'},
    {name: 'Collections', link: '/nfts/collections'}
    ]"></app-hero-nav>
    <router-outlet></router-outlet>
    `
})
export class NftsTopComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
}