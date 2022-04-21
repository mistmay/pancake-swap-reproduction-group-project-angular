import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-nav-modals',
  templateUrl: './nav-modals.component.html',
  styleUrls: ['./nav-modals.component.scss']
})
export class NavModalsComponent implements OnInit {
  @Input() settingScreenTitle: string = '';
  @Input() settingScreenTitleBackgroundType: boolean = true;
  @Input() modalType: string = '';

  constructor(private settingScreenLauncherService: SettingScreenLauncherService, private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  getSettingScreenTitleBackground(): string {
    if (this.settingScreenTitleBackgroundType) {
      return 'var(--background-7)';
    } else {
      return 'var(--background-8)';
    }
  }

  clickOutsideModal(event: Event): void {
    if (event.target !== this.elementRef.nativeElement.querySelector('.setting-screen')) {
      return;
    } else {
      this.settingScreenLauncherService.changeSettingScreenLauncherStatus('');
    }
  }

  closeModal(): void {
    this.settingScreenLauncherService.changeSettingScreenLauncherStatus('');
  }

}
