import { Component, OnInit } from '@angular/core';
import { SettingScreenLauncherService } from "../../../../services/setting-screen-launcher.service";
@Component({
  selector: 'app-start-in-seconds',
  templateUrl: './start-in-seconds.component.html',
  styleUrls: ['./start-in-seconds.component.scss']
})
export class StartInSecondsComponent implements OnInit {

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }

  changeSettingScreenLauncherStatus(status: 'connect' | 'settings' | 'roi'): void {
    this.settingScreenLauncherService.openModal(status);
  }

}
