import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-your-tickets',
  templateUrl: './get-your-tickets.component.html',
  styleUrls: ['./get-your-tickets.component.scss']
})
export class GetYourTicketsComponent implements OnInit {
  tomorrow!: Date;
  matchArray: [number, number][] = [
    [479, 2.046], [722, 3.091], [1204, 5.154], [2407, 10.308], [4814, 20.615], [9629, 41.240]
  ];
  showTableDetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.tomorrow = new Date();
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
  }

}
