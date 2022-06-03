import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';
import { CoingeckoApiService } from 'src/app/api/coingecko-api.service';

@Component({
  selector: 'app-trade-card',
  templateUrl: './trade-card.component.html',
  styleUrls: ['./trade-card.component.scss']
})
export class TradeCardComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  tokenPairs!: [any, any];

  constructor(private modalService: SettingScreenLauncherService, private api: CoingeckoApiService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.api.getTokensData('usd').subscribe((res: any) => {
      this.tokenPairs = [res.find((element: any) => element.symbol === 'cake'), res.find((element: any) => element.symbol === 'bnb')];
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  connect(): void {
    this.modalService.openModal('connect');
  }

  openSettings(): void {
    this.modalService.openModal('settings');
  }

  selectToken(): void {
    this.modalService.openModal('token');
  }

}
