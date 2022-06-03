import { Component, Input, OnInit } from '@angular/core';
import { SyrupPoolsService } from 'src/app/api/syrup-pools.service';
import { Farms } from 'src/app/models/farms';
import { Pools } from 'src/app/models/pools';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {

  @Input() isCake: boolean = true
  @Input() poolName!: string
  @Input() poolPrice!: number
  @Input() isPools!: boolean
  @Input() isFarms!: boolean
  @Input() pool!: Pools
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
      if (this.isPools) {
        if (this.isCake) {
          this.counter(113.85)
        } else {
          this.counter(this.pool.apr)
        }
      } else {
        this.counter(Number(this.farm.apr))
      }
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
