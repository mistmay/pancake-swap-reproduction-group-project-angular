import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ifo-top',
    template: `
    <app-hero-nav [heroNav]="[
    {name: 'Latest', link: '/ifo/ifo'},
    {name: 'Finished', link: '/ifo/history'}
    ]"></app-hero-nav>
    <app-ifo-header></app-ifo-header>
    <router-outlet></router-outlet>
    `
})
export class IfoTopComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
}