import { Component, OnDestroy, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { LoginService } from 'src/app/services/login.service';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';
import { Wallet } from 'src/app/models/wallet';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-liquidity',
  templateUrl: './liquidity.component.html',
  styleUrls: ['./liquidity.component.scss']
})
export class LiquidityComponent implements OnInit, OnDestroy {
  inputValue: number = 0;
  currentUser!: Wallet | undefined;
  subscription!: Subscription;

  constructor(private titleService: TitleService, private loginService: LoginService, private modalService: SettingScreenLauncherService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Liquidity');
    if (this.isLoggedIn()) {
      this.currentUser = this.loginService.getLoggedUser();
    }
    this.subscription = this.loginService.somethingChanged.subscribe(() => {
      if (this.isLoggedIn()) {
        this.currentUser = this.loginService.getLoggedUser();
      } else {
        this.currentUser = undefined;
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  openModal(): void {
    this.modalService.openModal('connect');
  }

  openSettings(): void {
    this.modalService.openModal('settings');
  }

  addLiquidity(): void {
    if (this.inputValue <= 0) {
      alert('Error: Please write a Positive Number');
    } else {
      this.loginService.addLiquidity(this.inputValue);
      this.inputValue = 0;
    }
  }

}
