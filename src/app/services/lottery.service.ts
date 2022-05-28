import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LotteryHistory } from '../models/lottery-history';

@Injectable({
  providedIn: 'root'
})
export class LotteryService {
  currentId: number = 1;
  currentIdObservable: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  lotteryHistory: LotteryHistory[] = [];
  lotteryHistoryObservable: BehaviorSubject<LotteryHistory[]> = new BehaviorSubject<LotteryHistory[]>([]);
  matchArray: number[] = [479, 722, 1204, 2407, 4814, 9629];
  cakePrize: number = 19255;
  minutes: number = 3;
  seconds: number = 0;

  constructor() { }

  startCounter(): void {
    setInterval(() => {
      if (this.minutes === 0 && this.seconds === 0) {
        this.addLotteryHistory();
        this.minutes = 3;
      }
      if (this.seconds === 0) {
        this.seconds = 60;
        this.minutes--;
      }
      this.seconds--;
    }, 1000);
  }

  getCurrentIdObservable(): Observable<number> {
    return this.currentIdObservable.asObservable();
  }

  getLotteryHistoryObservable(): Observable<LotteryHistory[]> {
    return this.lotteryHistoryObservable.asObservable();
  }

  generateNumber(): number {
    return Math.floor(Math.random() * (9 - 1 + 1) + 1);
  }

  addLotteryHistory(): void {
    const results: number[] = [];
    for (let i: number = 0; i < 6; i++) {
      results.push(this.generateNumber());
    }
    this.lotteryHistory.push({ id: this.currentId, date: new Date(), results: results });
    this.currentId++;
    this.lotteryHistoryObservable.next(this.lotteryHistory);
    this.currentIdObservable.next(this.currentId);
  }

}
