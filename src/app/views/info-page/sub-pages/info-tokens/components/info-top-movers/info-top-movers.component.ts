import { Component, OnInit } from '@angular/core';
import { CoingeckoApiService } from 'src/app/api/coingecko-api.service';

@Component({
  selector: 'app-info-top-movers',
  templateUrl: './info-top-movers.component.html',
  styleUrls: ['./info-top-movers.component.scss']
})
export class InfoTopMoversComponent implements OnInit {
  trendingList: any[] = [];

  constructor(private api: CoingeckoApiService) { }

  ngOnInit(): void {
    this.api.getTrendingCurrency('USD')
      .subscribe((res: any[]) => {
        this.trendingList = res;
      });
  }

}
