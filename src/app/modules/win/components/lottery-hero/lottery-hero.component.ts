import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery-hero',
  templateUrl: './lottery-hero.component.html',
  styleUrls: ['./lottery-hero.component.scss']
})
export class LotteryHeroComponent implements OnInit {
  totalNumber: number = 100.27;
  integer!: number;
  decimal!: number;
  incrementingNumberInteger: number = 0;
  incrementingNumberDecimal: number = 0;
  interval1!: ReturnType<typeof setInterval>;
  interval2!: ReturnType<typeof setInterval>;

  constructor() { }

  ngOnInit(): void {
    this.integer = Number(String(this.totalNumber).split('.')[0]);
    this.decimal = Number(String(this.totalNumber).split('.')[1]);
    this.interval1 = setInterval(() => {
      this.incrementingNumberInteger++;
      if (this.incrementingNumberInteger === this.integer) {
        clearInterval(this.interval1);
      }
    }, 10);
    this.interval2 = setInterval(() => {
      this.incrementingNumberDecimal++;
      if (this.incrementingNumberDecimal === this.decimal) {
        clearInterval(this.interval2);
      }
    }, 10);
  }



}
