import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-setting-screen-content-connect-wallet',
  templateUrl: './setting-screen-content-connect-wallet.component.html',
  styleUrls: ['./setting-screen-content-connect-wallet.component.scss']
})
export class SettingScreenContentConnectWalletComponent implements OnInit, OnDestroy {
  showMoreWallet!: boolean;
  subscription!: Subscription;

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
    this.subscription = this.settingScreenLauncherService.getShowMoreWallet()
      .subscribe((res: boolean) => {
        this.showMoreWallet = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setShowMoreWalletIconsTrue(): void {
    this.settingScreenLauncherService.showMoreWallet.next(true);
  }

}
