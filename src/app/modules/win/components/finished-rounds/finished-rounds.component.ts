import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finished-rounds',
  templateUrl: './finished-rounds.component.html',
  styleUrls: ['./finished-rounds.component.scss']
})
export class FinishedRoundsComponent implements OnInit {
  yesterday!: Date;
  showTableDetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.yesterday = new Date();
    this.yesterday.setDate(this.yesterday.getDate() - 1);
  }

}
