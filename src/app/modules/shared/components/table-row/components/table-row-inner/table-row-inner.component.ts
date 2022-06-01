import { Component, Input, OnInit } from '@angular/core';
import { Farms } from 'src/app/models/farms';
import { Pools } from 'src/app/models/pools';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-table-row-inner',
  templateUrl: './table-row-inner.component.html',
  styleUrls: ['./table-row-inner.component.scss']
})
export class TableRowInnerComponent implements OnInit {

  rowFooter: boolean = false
  hover: boolean = false
  hover2: boolean = false
  hover3: boolean = false
  hover4: boolean = false
  @Input() isPools!: boolean
  @Input() isFarms!: boolean
  @Input() pool!: Pools
  @Input() isCake!: boolean
  @Input() farm!: Farms

  random = Math. floor((Math.random() * 10000000) + 1)

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  count!: String
  integer: number = 0
  decimal: number = 0
  timer!: ReturnType<typeof setInterval>

  ngOnInit(): void {
    this.counts()
  }

  counts: any = () => {
    this.timer = setInterval(() => {
      if(this.isPools) {
      this.counter(this.pool.apr)
    } else {
      this.counter(Number(this.farm.apr))
    }
    }, 20);
  }

  // Cambiare num in base al valore della APY

  counter(apr: number) {
    let arr = ((apr)).toString().split(".")
    this.count = `${this.integer++}.${(String(this.decimal++)).split("").splice(0,2).join("")}%`;
    if (this.integer == Number(arr[0]) || this.decimal == Number(arr[1])) {
      this.count = (apr).toFixed(2) + "%"
      clearInterval(this.timer);
    }
  }

  roi(): void {
    this.settingScreenLauncherService.openModal('roi');
  }

  errorHandler(event: any) {
    console.debug(event);
    event.target.src = `https://bsctools.xyz/pancakeswap/img/${this.pool.name}.png`;
 }

 connectWallet() {
  this.settingScreenLauncherService.openModal("connect")
 }

}
