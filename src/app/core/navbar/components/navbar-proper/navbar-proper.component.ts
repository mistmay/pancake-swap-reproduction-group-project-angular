import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-navbar-proper',
  templateUrl: './navbar-proper.component.html',
  styleUrls: ['./navbar-proper.component.scss']
})
export class NavbarProperComponent implements OnInit {
  showTradeMenu: boolean = false;
  showEarnMenu: boolean = false;
  showWinMenu: boolean = false;
  showNftMenu: boolean = false;
  showPointsMenu: boolean = false;
  showLanguageMenu: boolean = false;

  constructor(private darkModeService: DarkModeService, private settingScreenLauncherService: SettingScreenLauncherService, private titleService: TitleService) { }

  ngOnInit(): void {
  }

  darkModeStatus(): boolean {
    return this.darkModeService.darkModeStatus;
  }

  changeSettingScreenLauncherStatus(status: string): void {
    this.settingScreenLauncherService.changeSettingScreenLauncherStatus(status);
  }

  getCakePrice(): string {
    return this.titleService.cakePrice;
  }

}
