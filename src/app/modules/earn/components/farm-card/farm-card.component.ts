import { Component, Input, OnInit } from '@angular/core';
import { Farms } from 'src/app/models/farms';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-farm-card',
  templateUrl: './farm-card.component.html',
  styleUrls: ['./farm-card.component.scss']
})
export class FarmCardComponent implements OnInit {

  @Input() farm!: Farms

  count!: String
  integer: number = 0
  decimal: number = 0
  timer!: ReturnType<typeof setInterval>

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
    this.counts()
  }

  counts: any = () => {
    this.timer = setInterval(() => {
      this.counter(Number(this.farm.apr))
    }, 20);
  }

  counter(apr: number) {
    let arr = ((apr)).toString().split(".")
    this.count = `${this.integer++}.${(String(this.decimal++)).split("").splice(0, 2).join("")}%`;
    if (this.integer == Number(arr[0]) || this.decimal == Number(arr[1])) {
      this.count = (apr).toFixed(2) + "%"
      clearInterval(this.timer);
    }
  }

  changeSettingScreenLauncherStatus(status: 'connect' | 'settings' | 'roi'): void {
    this.settingScreenLauncherService.openModal(status);
  }

  roi(): void {
    this.settingScreenLauncherService.openModal('roi');
  }

}
