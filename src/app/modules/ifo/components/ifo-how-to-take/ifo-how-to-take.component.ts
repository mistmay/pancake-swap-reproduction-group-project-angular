import { Component, OnInit } from '@angular/core';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-ifo-how-to-take',
  templateUrl: './ifo-how-to-take.component.html',
  styleUrls: ['./ifo-how-to-take.component.scss']
})
export class IfoHowToTakeComponent implements OnInit {

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }

  changeSettingScreenLauncherStatus(status: 'connect' | 'settings' | 'roi'): void {
    this.settingScreenLauncherService.openModal(status);
  }

}
