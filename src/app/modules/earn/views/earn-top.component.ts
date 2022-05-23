import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earn-top',
  template: `
  <app-hero-nav [heroNav]="[
    {name: 'Farms', link: '/earn/farms'},
    {name: 'Pools', link: '/earn/pools'},
    ]"></app-hero-nav>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class EarnTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
