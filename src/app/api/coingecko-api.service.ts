import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoApiService {

  constructor(private http: HttpClient) { }

  getTokensData(currency: string) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  }

  getGraphData(crypto: string, currency: string, days: number) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=${currency}&days=${days}`);
  }

  getTrendingCurrency(currency: string) {
    return this.http.get<any[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`);
  }

  getTokenById(id: string) {
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${id}`);
  }

}
