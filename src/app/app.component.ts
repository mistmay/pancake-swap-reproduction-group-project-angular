import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingScreenLauncherService } from './services/setting-screen-launcher.service';
import { LotteryService } from './services/lottery.service';
import { SyrupPoolsService } from './api/syrup-pools.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  marginTop: string = 'calc(70px + 56px)';
  showModal!: boolean;

  constructor(private api: SyrupPoolsService , private settingScreenLauncherService: SettingScreenLauncherService, private lottery: LotteryService) { }

  ngOnInit(): void {
    this.lottery.addLotteryHistory();
    this.lottery.startCounter();
    this.subscription = this.settingScreenLauncherService.getShowModal()
      .subscribe((res: boolean) => {
        this.showModal = res;
      });
    this.api.getPoolsPrice()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getMarginTop(): string {
    return this.marginTop;
  }

  noPhishingMarginTop(): void {
    this.marginTop = '56px';
  }

}
