import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { InfoSearchModalService } from 'src/app/services/info-search-modal.service';
import { CoingeckoApiService } from 'src/app/api/coingecko-api.service';
import { PancakeApiService } from 'src/app/api/pancake-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit, AfterViewInit {
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('input') input!: ElementRef;
  searchedKey: string = '';
  tokensArray!: any[];
  pairsArray!: any[];

  constructor(private modalService: InfoSearchModalService, private api: CoingeckoApiService, private api2: PancakeApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getTokensData('USD')
      .subscribe((res: any[]) => {
        this.tokensArray = res;
      });
    this.api2.getPairs()
      .subscribe((res: any) => {
        this.pairsArray = Object.values(res.data);
      });
  }

  ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }

  closeModal(event: Event): void {
    if (event.target !== this.modal.nativeElement) {
      return;
    } else {
      this.modalService.closeModal();
    }
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
    this.modalService.closeModal();
    this.router.navigate(['info/token', id]);
  }

}
