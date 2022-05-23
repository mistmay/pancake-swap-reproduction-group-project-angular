import { Component, OnInit } from '@angular/core';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-card-mobile',
  templateUrl: './card-mobile.component.html',
  styleUrls: ['./card-mobile.component.scss']
})
export class CardMobileComponent implements OnInit {
  showDetails: boolean = false;

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }

  changeSettingScreenLauncherStatus(status: 'connect' | 'settings' | 'roi'): void {
    this.settingScreenLauncherService.openModal(status);
  }

  roi(): void {
    this.settingScreenLauncherService.openModal('roi');
  }

}
