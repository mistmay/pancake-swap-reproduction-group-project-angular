import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { PancakeApiService } from '../api/pancake-api.service';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  titleStart: string = '';
  cakePrice!: string;
  subscription!: Subscription

  constructor(private title: Title, private api: PancakeApiService) {
  }

  setTitle(start: string): void {
    this.titleStart = start;
    this.api.getTokens()
      .subscribe((res: any) => {
        this.cakePrice = Number(res.data['0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'].price).toFixed(3)
        this.title.setTitle(this.titleStart + ` | PancakeSwap - $${this.cakePrice}`);
      });
  }
}
