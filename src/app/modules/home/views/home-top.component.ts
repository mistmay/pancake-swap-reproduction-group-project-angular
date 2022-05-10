import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-top',
    template: `<router-outlet></router-outlet>`
})
export class HomeTopComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
}