import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CoingeckoApiService } from 'src/app/api/coingecko-api.service';

@Component({
  selector: 'app-info-top-movers',
  templateUrl: './info-top-movers.component.html',
  styleUrls: ['./info-top-movers.component.scss']
})
export class InfoTopMoversComponent implements OnInit, OnDestroy {
  trendingList: any[] = [];
  subscription!: Subscription;

  constructor(private api: CoingeckoApiService) { }

  ngOnInit(): void {
    this.subscription = this.api.getTrendingCurrency('USD')
      .subscribe((res: any[]) => {
        this.trendingList = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
