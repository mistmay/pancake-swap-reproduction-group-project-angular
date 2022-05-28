import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LotteryHistory } from 'src/app/models/lottery-history';
import { LotteryService } from 'src/app/services/lottery.service';

@Component({
  selector: 'app-finished-rounds',
  templateUrl: './finished-rounds.component.html',
  styleUrls: ['./finished-rounds.component.scss']
})
export class FinishedRoundsComponent implements OnInit {
  showTableDetails: boolean = false;
  lotteryHistory!: LotteryHistory[];
  currentLottery!: number;
  subscription!: Subscription;

  constructor(private lottery: LotteryService) { }

  ngOnInit(): void {
    this.subscription = this.lottery.getLotteryHistoryObservable()
      .subscribe((res: LotteryHistory[]) => {
        this.lotteryHistory = res;
        this.currentLottery = this.lotteryHistory.length - 1;
      });
  }

}
