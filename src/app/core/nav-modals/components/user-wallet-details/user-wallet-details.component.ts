import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Wallet } from 'src/app/models/wallet';

@Component({
  selector: 'app-user-wallet-details',
  templateUrl: './user-wallet-details.component.html',
  styleUrls: ['./user-wallet-details.component.scss']
})
export class UserWalletDetailsComponent implements OnInit {
  currentWallet!: Wallet;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.currentWallet = this.loginService.getLoggedUser();
  }

  logout(): void {
    this.loginService.logout();
  }

}
