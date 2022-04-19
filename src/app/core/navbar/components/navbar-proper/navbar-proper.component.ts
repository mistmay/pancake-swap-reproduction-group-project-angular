import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode.service';
import { SettingScreenLauncherService } from 'src/app/setting-screen-launcher.service';

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

  constructor(public darkModeService: DarkModeService, public settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }

}
