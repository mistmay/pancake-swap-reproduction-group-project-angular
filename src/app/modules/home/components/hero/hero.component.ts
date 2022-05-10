import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private darkModeService: DarkModeService, private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }

  changeSettingScreenLauncherStatus(status: 'connect' | 'settings' | 'roi'): void {
    this.settingScreenLauncherService.openModal(status);
  }

  darkModeStatus(): boolean {
    return this.darkModeService.darkModeStatus;
  }

}
