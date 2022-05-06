import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('modal') modal!: ElementRef;

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
    if (event.target !== this.modal.nativeElement) {
      return;
    } else {
      this.settingScreenLauncherService.changeSettingScreenLauncherStatus('');
    }
  }

  closeModal(): void {
    this.settingScreenLauncherService.changeSettingScreenLauncherStatus('');
  }

}
