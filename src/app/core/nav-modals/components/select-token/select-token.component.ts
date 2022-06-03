import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoingeckoApiService } from 'src/app/api/coingecko-api.service';
import { ConverterService } from 'src/app/services/converter.service';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-select-token',
  templateUrl: './select-token.component.html',
  styleUrls: ['./select-token.component.scss']
})
export class SelectTokenComponent implements OnInit, OnDestroy {
  tokenList!: any;
  tokenType!: 0 | 1;
  subscriptions: Subscription[] = [];
  searchedKey: string = '';

  constructor(private api: CoingeckoApiService, private converter: ConverterService, private modalService: SettingScreenLauncherService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.converter.getTokenTypeObservable().subscribe((res: 0 | 1) => {
      this.tokenType = res;
    }));
    this.subscriptions.push(this.api.getTokensData('usd')
      .subscribe((res: any) => {
        this.tokenList = res;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  selectToken(token: any): void {
    this.converter.updateSingleToken(this.tokenType, token);
    this.modalService.closeModal();
  }

}
