import { Component, Input, OnInit } from '@angular/core';
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
  @Input() isPools!: boolean
  @Input() isFarms!: boolean
  @Input() pool!: Pools

  random = Math. floor((Math.random() * 10000000) + 1)

  constructor(private settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }


  toggleRowFooter() {
    this.rowFooter = !this.rowFooter
  }

  roi(): void {
    this.settingScreenLauncherService.openModal('roi');
  }

}
