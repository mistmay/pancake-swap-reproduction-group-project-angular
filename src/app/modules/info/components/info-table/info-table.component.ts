import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CoingeckoApiService } from 'src/app/api/coingecko-api.service';
import { PancakeApiService } from 'src/app/api/pancake-api.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-table',
  templateUrl: './info-table.component.html',
  styleUrls: ['./info-table.component.scss']
})
export class InfoTableComponent implements OnInit, OnDestroy {
  @Input() tableType!: 'tokens' | 'pools';
  @Input() isFiltered: boolean = false;
  @Input() filteringToken!: string;
  tokensList!: any[];
  currentPage: number = 1;
  itemsForPage: number = 10;
  subscriptions: Subscription[] = [];

  constructor(private api: CoingeckoApiService, private api2: PancakeApiService, private router: Router) { }

  ngOnInit(): void {
    if (this.tableType === 'tokens') {
      this.subscriptions.push(this.api.getTokensData('USD')
        .subscribe((res: any) => {
          this.tokensList = res.slice(0, 30);
        }));
    }
    if (this.tableType === 'pools' && !this.isFiltered) {
      this.subscriptions.push(this.api2.getPairs()
        .subscribe((res: any) => {
          this.tokensList = Object.values(res.data).slice(0, 30);
        }));
    }
    if (this.tableType === 'pools' && this.isFiltered) {
      this.subscriptions.push(this.api2.getPairs()
        .subscribe((res: any) => {
          this.tokensList = Object.values(res.data);
        }));
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  chooseImg(symbol: string): string {
    if (symbol === 'BTCB') {
      return 'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c/logo.png';
    } else if (symbol === 'BUSD') {
      return 'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/logo.png';
    } else if (symbol === 'Cake') {
      return 'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png';
    } else if (symbol === 'ETH') {
      return 'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x2170Ed0880ac9A755fd29B2688956BD959F933F8/logo.png';
    } else if (symbol === 'USDT') {
      return 'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0x55d398326f99059fF775485246999027B3197955/logo.png';
    } else if (symbol === 'WBNB') {
      return 'https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/logo.png';
    } else {
      return 'https://thumbs.dreamstime.com/b/illustrazione-rotonda-nera-piana-di-vettore-del-bottone-dell-icona-punto-interrogativo-progettazione-isolata-sul-rotondo-nero-142988106.jpg';
    }
  }

  goToDetails(id: string): void {
    this.router.navigate(['info/token', id]);
  }

}
