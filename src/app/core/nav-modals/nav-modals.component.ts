import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-nav-modals',
  templateUrl: './nav-modals.component.html',
  styleUrls: ['./nav-modals.component.scss']
})
export class NavModalsComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  settingScreenTitle!: string;
  settingScreenTitleBackgroundType!: boolean;
  showFinal!: boolean;
  modalType!: 'connect' | 'settings' | 'roi' | 'lottery' | 'token';
  @ViewChild('modal') modal!: ElementRef;

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
    this.subscription = this.settingScreenLauncherService.getModalType()
      .subscribe((res: 'connect' | 'settings' | 'roi' | 'lottery' | 'token') => {
        this.modalType = res;
        switch (this.modalType) {
          case 'connect':
            this.settingScreenTitle = 'Connect Wallet';
            this.settingScreenTitleBackgroundType = false;
            this.showFinal = true;
            break;
          case 'settings':
            this.settingScreenTitle = 'Settings';
            this.settingScreenTitleBackgroundType = true;
            this.showFinal = true;
            break;
          case 'roi':
            this.settingScreenTitle = 'ROI Calculator';
            this.settingScreenTitleBackgroundType = true;
            this.showFinal = false;
            break;
          case 'lottery':
            this.settingScreenTitle = 'Buy Tickets';
            this.settingScreenTitleBackgroundType = true;
            this.showFinal = true;
            break;
          case 'token':
            this.settingScreenTitle = 'Select a Token';
            this.settingScreenTitleBackgroundType = true;
            this.showFinal = true;
            break;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
