import { Component, OnInit } from '@angular/core';
import { CoingeckoApiService } from 'src/app/api/coingecko-api.service';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent implements OnInit {
  tokensList!: any[];

  constructor(private api: CoingeckoApiService) { }

  ngOnInit(): void {
    this.api.getTokensData('USD')
      .subscribe((res: any) => {
        this.tokensList = res.splice(0, 30);
      });
  }

}
