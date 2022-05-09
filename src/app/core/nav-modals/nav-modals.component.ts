import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-nav-modals',
  templateUrl: './nav-modals.component.html',
  styleUrls: ['./nav-modals.component.scss']
})
export class NavModalsComponent implements OnInit {
  settingScreenTitle!: string;
  settingScreenTitleBackgroundType!: boolean;
  modalType!: 'connect' | 'settings' | 'roi';
  @ViewChild('modal') modal!: ElementRef;

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
    this.settingScreenLauncherService.getModalType()
      .subscribe((res: 'connect' | 'settings' | 'roi') => {
        this.modalType = res;
        switch (this.modalType) {
          case 'connect':
            this.settingScreenTitle = 'Connect Wallet';
            this.settingScreenTitleBackgroundType = false;
            break;
          case 'settings':
            this.settingScreenTitle = 'Settings';
            this.settingScreenTitleBackgroundType = true;
            break;
          case 'roi':
            break;
        }
      });
  }

  getSettingScreenTitleBackground(): string {
    if (this.settingScreenTitleBackgroundType) {
      return 'var(--background-7)';
    } else {
      return 'var(--background-8)';
    }
  }

  clickOutsideModal(event: Event): void {
    if (event.target !== this.modal.nativeElement) {
      return;
    } else {
      this.settingScreenLauncherService.closeModal();
    }
  }

  closeModal(): void {
    this.settingScreenLauncherService.closeModal();
  }

}
