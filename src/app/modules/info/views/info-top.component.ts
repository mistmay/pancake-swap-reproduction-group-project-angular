import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-info-top',
    template: `
    <router-outlet></router-outlet>
    `
})
export class InfoTopComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
}
