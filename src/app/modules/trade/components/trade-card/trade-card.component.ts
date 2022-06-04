import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';
import { CoingeckoApiService } from 'src/app/api/coingecko-api.service';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-trade-card',
  templateUrl: './trade-card.component.html',
  styleUrls: ['./trade-card.component.scss']
})
export class TradeCardComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  tokenPairs!: [any, any] | undefined;
  inputNumber: number = 0;
  result: number = 0;

  constructor(private modalService: SettingScreenLauncherService, private api: CoingeckoApiService, private converter: ConverterService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.api.getTokensData('usd').subscribe((res: any) => {
      this.converter.updateTokenPairs([res.find((element: any) => element.symbol === 'cake'), res.find((element: any) => element.symbol === 'bnb')]);
    }));
    this.subscriptions.push(this.converter.getTokenPairsObservable().subscribe((res: [any, any] | undefined) => {
      this.tokenPairs = res;
      this.convert();
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

  selectToken(type: 0 | 1): void {
    this.converter.tokenType.next(type);
    this.modalService.openModal('token');
  }

  convert(): void {
    if (this.tokenPairs !== undefined) {
      const conversionFactor: number = this.tokenPairs[0].current_price / this.tokenPairs[1].current_price;
      this.result = this.inputNumber * conversionFactor;
    }
  }

}
