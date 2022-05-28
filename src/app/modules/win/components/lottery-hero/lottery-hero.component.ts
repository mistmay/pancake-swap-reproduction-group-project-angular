import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { LotteryService } from 'src/app/services/lottery.service';
import { PancakeApiService } from 'src/app/api/pancake-api.service';

@Component({
  selector: 'app-lottery-hero',
  templateUrl: './lottery-hero.component.html',
  styleUrls: ['./lottery-hero.component.scss']
})
export class LotteryHeroComponent implements OnInit {
  totalNumber: number = 100.50;
  integer!: number;
  decimal!: number;
  incrementingNumberInteger: number = 0;
  incrementingNumberDecimal: number = 0;
  interval1!: ReturnType<typeof setInterval>;
  interval2!: ReturnType<typeof setInterval>;

  constructor(private lottery: LotteryService, private api: PancakeApiService) { }

  ngOnInit(): void {
    this.api.getTokens()
      .subscribe((res: any) => {
        const cakePrice: number = Number(res.data['0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'].price);
        this.totalNumber = Math.ceil(cakePrice * this.getCakePrize()) / 1000;
        this.integer = Number(this.totalNumber.toFixed(3).split('.')[0]);
        this.decimal = Number(this.totalNumber.toFixed(3).split('.')[1]);
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
      });
  }

  getCakePrize(): number {
    return this.lottery.cakePrize;
  }

}
