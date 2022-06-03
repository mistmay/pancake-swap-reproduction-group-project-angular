import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoingeckoApiService } from 'src/app/api/coingecko-api.service';

@Component({
  selector: 'app-select-token',
  templateUrl: './select-token.component.html',
  styleUrls: ['./select-token.component.scss']
})
export class SelectTokenComponent implements OnInit, OnDestroy {
  tokenList!: any;
  subscription!: Subscription;
  searchedKey: string = '';

  constructor(private api: CoingeckoApiService) { }

  ngOnInit(): void {
    this.subscription = this.api.getTokensData('usd')
      .subscribe((res: any) => {
        this.tokenList = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
