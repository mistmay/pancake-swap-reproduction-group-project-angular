import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingScreenLauncherService {
  settingScreenLauncherStatus: string = '';
  showMoreWalletIcons: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  changeSettingScreenLauncherStatus(status: string): void {
    this.settingScreenLauncherStatus = status;
    this.document.body.classList.toggle('scroll-disabled');
    if (status === '') {
      this.showMoreWalletIcons = false;
    }
  }
}
