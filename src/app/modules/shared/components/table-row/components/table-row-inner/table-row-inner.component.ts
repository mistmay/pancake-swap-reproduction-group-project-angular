import { Component, OnInit } from '@angular/core';
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
