import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error-top',
    template: `<router-outlet></router-outlet>`
})
export class ErrorTopComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
}