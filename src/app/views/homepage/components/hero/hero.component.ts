import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/dark-mode.service';
import { SettingScreenLauncherService } from 'src/app/setting-screen-launcher.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(public darkModeService: DarkModeService, public settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }

}
