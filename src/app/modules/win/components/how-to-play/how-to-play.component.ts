import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.scss']
})
export class HowToPlayComponent implements OnInit {
  cards: [string, string][] = [
    ['Buy Tickets', 'Prices are set when the round starts, equal to 5 USD in CAKE per ticket.'],
    ['Wait for the Draw', 'There is one draw every day alternating between 0 AM UTC and 12 PM UTC.'],
    ['Check for Prizes', 'Once the round’s over, come back to the page and check to see if you’ve won!']
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
