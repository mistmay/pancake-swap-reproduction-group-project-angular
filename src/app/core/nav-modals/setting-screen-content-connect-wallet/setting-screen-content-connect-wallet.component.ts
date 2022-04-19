import { Component, OnInit } from '@angular/core';
import { SettingScreenLauncherService } from 'src/app/setting-screen-launcher.service';

@Component({
  selector: 'app-setting-screen-content-connect-wallet',
  templateUrl: './setting-screen-content-connect-wallet.component.html',
  styleUrls: ['./setting-screen-content-connect-wallet.component.scss']
})
export class SettingScreenContentConnectWalletComponent implements OnInit {

  constructor(public settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }

}
