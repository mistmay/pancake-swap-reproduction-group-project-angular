import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Wallet } from 'src/app/models/wallet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-wallet-details',
  templateUrl: './user-wallet-details.component.html',
  styleUrls: ['./user-wallet-details.component.scss']
})
export class UserWalletDetailsComponent implements OnInit, OnDestroy {
  currentWallet!: Wallet;
  subscription!: Subscription;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.currentWallet = this.loginService.getLoggedUser();
    }
    this.subscription = this.loginService.somethingChanged.subscribe(() => {
      if (this.isLoggedIn()) {
        this.currentWallet = this.loginService.getLoggedUser();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout(): void {
    this.loginService.logout();
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

}
