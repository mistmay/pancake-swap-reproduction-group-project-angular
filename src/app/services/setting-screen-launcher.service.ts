import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingScreenLauncherService {
  renderer: Renderer2;
  settingScreenLauncherStatus: string = '';
  showMoreWalletIcons: boolean = false;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  changeSettingScreenLauncherStatus(status: string): void {
    this.settingScreenLauncherStatus = status;
    if (status === '') {
      this.showMoreWalletIcons = false;
      this.renderer.removeClass(document.body, 'scroll-disabled');
    } else {
      this.renderer.addClass(document.body, 'scroll-disabled');
    }
  }
}
