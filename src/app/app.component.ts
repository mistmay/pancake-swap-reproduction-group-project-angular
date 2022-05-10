import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingScreenLauncherService } from './services/setting-screen-launcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  marginTop: string = 'calc(70px + 56px)';
  showModal!: boolean;

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
    this.subscription = this.settingScreenLauncherService.getShowModal()
      .subscribe((res: boolean) => {
        this.showModal = res;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getMarginTop(): string {
    return this.marginTop;
  }

  noPhishingMarginTop(): void {
    this.marginTop = '56px';
  }

}
