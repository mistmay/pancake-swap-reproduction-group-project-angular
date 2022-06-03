import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Wallet } from 'src/app/models/wallet';
import { Subscription } from 'rxjs';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-tab-orders',
  templateUrl: './tab-orders.component.html',
  styleUrls: ['./tab-orders.component.scss']
})
export class TabOrdersComponent implements OnInit, OnDestroy {
  currentUser!: Wallet | undefined;
  subscription!: Subscription;

  constructor(private loginService: LoginService, private modalService: SettingScreenLauncherService) { }

  ngOnInit(): void {
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

}
