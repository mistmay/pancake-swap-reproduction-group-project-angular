import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PancakeApiService } from '../api/pancake-api.service';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  titleStart: string = '';
  cakePrice!: string;

  constructor(private title: Title, private api: PancakeApiService) {
  }

  setTitle(start: string): void {
    this.titleStart = start;
    this.api.getTokens()
      .subscribe((res: any) => {
        const tokensArray: Token[] = Object.values(res.data);
        this.cakePrice = Number(tokensArray[3].price).toFixed(3)
        this.title.setTitle(this.titleStart + ` | PancakeSwap - $${this.cakePrice}`);
      });
  }
}
