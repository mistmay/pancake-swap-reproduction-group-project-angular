import { Component, OnInit } from '@angular/core';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-setting-screen-content-connect-wallet',
  templateUrl: './setting-screen-content-connect-wallet.component.html',
  styleUrls: ['./setting-screen-content-connect-wallet.component.scss']
})
export class SettingScreenContentConnectWalletComponent implements OnInit {
  showMoreWallet!: boolean;

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
    this.settingScreenLauncherService.getShowMoreWallet()
      .subscribe((res: boolean) => {
        this.showMoreWallet = res;
      });
  }

  setShowMoreWalletIconsTrue(): void {
    this.settingScreenLauncherService.showMoreWallet.next(true);
  }

}
