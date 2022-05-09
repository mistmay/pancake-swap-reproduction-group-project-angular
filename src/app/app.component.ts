import { Component, OnInit } from '@angular/core';
import { SettingScreenLauncherService } from './services/setting-screen-launcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  marginTop: string = 'calc(70px + 56px)';
  showModal!: boolean;

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
    this.settingScreenLauncherService.getShowModal()
      .subscribe((res: boolean) => {
        this.showModal = res;
      });
  }

  getMarginTop(): string {
    return this.marginTop;
  }

  noPhishingMarginTop(): void {
    this.marginTop = '56px';
  }

}
