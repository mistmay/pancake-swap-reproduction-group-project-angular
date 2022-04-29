import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PancakeApiService {

  constructor(private http: HttpClient) { }

  getTokens() {
    return this.http.get<any>('https://api.pancakeswap.info/api/v2/tokens');
  }

  getPairs() {
    return this.http.get<any>('https://api.pancakeswap.info/api/v2/pairs');
  }

}
