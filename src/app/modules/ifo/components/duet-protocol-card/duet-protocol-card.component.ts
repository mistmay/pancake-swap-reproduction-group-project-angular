import { Component, OnInit, Input } from '@angular/core';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-duet-protocol-card',
  templateUrl: './duet-protocol-card.component.html',
  styleUrls: ['./duet-protocol-card.component.scss']
})
export class DuetProtocolCardComponent implements OnInit {
  showDetails: boolean = false;
  @Input() backgroundImage!: string;
  showContent: boolean = false;
  @Input() showAlways!: boolean;
  @Input() name!: string;

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }

  changeSettingScreenLauncherStatus(status: 'connect' | 'settings' | 'roi'): void {
    this.settingScreenLauncherService.openModal(status);
  }

}
