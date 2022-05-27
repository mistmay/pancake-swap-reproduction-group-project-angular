import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-your-tickets',
  templateUrl: './get-your-tickets.component.html',
  styleUrls: ['./get-your-tickets.component.scss']
})
export class GetYourTicketsComponent implements OnInit {
  tomorrow!: Date;
  showTableDetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.tomorrow = new Date();
    this.tomorrow.setDate(this.tomorrow.getDate() + 1);
  }

}
