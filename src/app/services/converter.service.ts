import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  tokenPairs: [any, any] | undefined = undefined;
  tokenPairsObservable: BehaviorSubject<[any, any] | undefined> = new BehaviorSubject<[any, any] | undefined>(undefined);
  tokenType: BehaviorSubject<0 | 1> = new BehaviorSubject<0 | 1>(0);

  constructor() { }

  getTokenPairsObservable(): Observable<[any, any] | undefined> {
    return this.tokenPairsObservable.asObservable();
  }

  getTokenTypeObservable(): Observable<0 | 1> {
    return this.tokenType.asObservable();
  }

  updateTokenPairs(newPair: [any, any]): void {
    this.tokenPairs = newPair;
    this.tokenPairsObservable.next(this.tokenPairs);
  }

  updateSingleToken(position: 0 | 1, token: any): void {
    if (this.tokenPairs !== undefined) {
      this.tokenPairs[position] = token;
      this.tokenPairsObservable.next(this.tokenPairs);
    }
  }
}
