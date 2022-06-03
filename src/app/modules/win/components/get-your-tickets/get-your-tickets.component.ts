import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LotteryService } from 'src/app/services/lottery.service';
import { TitleService } from 'src/app/services/title.service';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-get-your-tickets',
  templateUrl: './get-your-tickets.component.html',
  styleUrls: ['./get-your-tickets.component.scss']
})
export class GetYourTicketsComponent implements OnInit, OnDestroy {
  currentLottery!: number;
  showTableDetails: boolean = false;
  subscription!: Subscription;

  constructor(private titleService: TitleService, private lottery: LotteryService, private modalService: SettingScreenLauncherService) { }

  ngOnInit(): void {
    this.subscription = this.lottery.getCurrentIdObservable()
      .subscribe((res: number) => {
        this.currentLottery = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getCakePrice(): number {
    return Number(this.titleService.cakePrice);
  }

  getCakePrize(): number {
    return this.lottery.cakePrize;
  }

  getLotteryMinutes(): number {
    return this.lottery.minutes;
  }

  getLotterySeconds(): number {
    return this.lottery.seconds;
  }

  openModal(): void {
    this.modalService.openModal('lottery');
  }

}
