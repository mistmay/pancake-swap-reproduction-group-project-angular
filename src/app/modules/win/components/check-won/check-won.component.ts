import { Component, OnDestroy, OnInit } from '@angular/core';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';
import { Ticket, Wallet } from 'src/app/models/wallet';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { LotteryHistory } from 'src/app/models/lottery-history';
import { LotteryService } from 'src/app/services/lottery.service';

@Component({
  selector: 'app-check-won',
  templateUrl: './check-won.component.html',
  styleUrls: ['./check-won.component.scss']
})
export class CheckWonComponent implements OnInit, OnDestroy {
  currentUser!: Wallet | undefined;
  subscriptions: Subscription[] = [];
  lotteryHistory!: LotteryHistory[];
  currentLotteryArray!: Array<LotteryHistory | undefined> | undefined;

  constructor(private modalService: SettingScreenLauncherService, private loginService: LoginService, private lottery: LotteryService) { }

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.currentUser = this.loginService.getLoggedUser();
    }
    this.subscriptions.push(this.loginService.somethingChanged.subscribe(() => {
      if (this.isLoggedIn()) {
        this.currentUser = this.loginService.getLoggedUser();
      } else {
        this.currentUser = undefined;
      }
    }));
    this.subscriptions.push(
      this.lottery.getLotteryHistoryObservable()
        .subscribe((res: LotteryHistory[]) => {
          this.lotteryHistory = res;
          if (this.currentUser && this.isLoggedIn()) {
            const currentLottery: Array<LotteryHistory | undefined> = [];
            this.currentUser.tickets.forEach((ticket: Ticket) => {
              const lotteryItem: LotteryHistory | undefined = this.lotteryHistory.find((item: LotteryHistory) => item.id === ticket.forId);
              currentLottery.push(lotteryItem);
              if (lotteryItem) {
                let prizeType: 0 | 1 | 2 | 3 | 4 | 5 | 6 = 0;
                if (ticket.numbers[0] === lotteryItem.results[0]) {
                  prizeType = 1;
                }
                if (
                  ticket.numbers[0] === lotteryItem.results[0]
                  && ticket.numbers[1] === lotteryItem.results[1]
                ) {
                  prizeType = 2;
                }
                if (
                  ticket.numbers[0] === lotteryItem.results[0]
                  && ticket.numbers[1] === lotteryItem.results[1]
                  && ticket.numbers[2] === lotteryItem.results[2]
                ) {
                  prizeType = 3;
                }
                if (
                  ticket.numbers[0] === lotteryItem.results[0]
                  && ticket.numbers[1] === lotteryItem.results[1]
                  && ticket.numbers[2] === lotteryItem.results[2]
                  && ticket.numbers[3] === lotteryItem.results[3]
                ) {
                  prizeType = 4;
                }
                if (
                  ticket.numbers[0] === lotteryItem.results[0]
                  && ticket.numbers[1] === lotteryItem.results[1]
                  && ticket.numbers[2] === lotteryItem.results[2]
                  && ticket.numbers[3] === lotteryItem.results[3]
                  && ticket.numbers[4] === lotteryItem.results[4]
                ) {
                  prizeType = 5;
                }
                if (
                  ticket.numbers[0] === lotteryItem.results[0]
                  && ticket.numbers[1] === lotteryItem.results[1]
                  && ticket.numbers[2] === lotteryItem.results[2]
                  && ticket.numbers[3] === lotteryItem.results[3]
                  && ticket.numbers[4] === lotteryItem.results[4]
                  && ticket.numbers[5] === lotteryItem.results[5]
                ) {
                  prizeType = 6;
                }
                if (prizeType > 0) {
                  ticket.isWon = true;
                  ticket.winType = prizeType
                  this.loginService.emitChanges();
                }
              }
            });
            this.currentLotteryArray = currentLottery;
          } else {
            this.currentLotteryArray = undefined;
          }
        }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  openModal(): void {
    this.modalService.openModal('connect');
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  prize(prizeType: 0 | 1 | 2 | 3 | 4 | 5 | 6): number {
    if (prizeType === 0) {
      return 0;
    } else {
      return this.lottery.matchArray[prizeType - 1];
    }
  }

  takePrize(prize: number, ticket: Ticket): void {
    ticket.isTaken = true;
    this.loginService.addLiquidity(prize);
  }

}
