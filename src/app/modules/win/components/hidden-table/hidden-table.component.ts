import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { LotteryService } from 'src/app/services/lottery.service';

@Component({
  selector: 'app-hidden-table',
  templateUrl: './hidden-table.component.html',
  styleUrls: ['./hidden-table.component.scss']
})
export class HiddenTableComponent implements OnInit {
  matchArray!: number[];

  constructor(private titleService: TitleService, private lottery: LotteryService) { }

  ngOnInit(): void {
    this.matchArray = this.getMatchArray();
  }

  getCakePrice(): number {
    return Number(this.titleService.cakePrice);
  }

  getMatchArray(): number[] {
    return this.lottery.matchArray;
  }

}
