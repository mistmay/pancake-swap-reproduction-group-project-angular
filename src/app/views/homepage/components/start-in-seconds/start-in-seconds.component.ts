import { Component, OnInit } from '@angular/core';
import { SettingScreenLauncherService } from "../../../../setting-screen-launcher.service";
@Component({
  selector: 'app-start-in-seconds',
  templateUrl: './start-in-seconds.component.html',
  styleUrls: ['./start-in-seconds.component.scss']
})
export class StartInSecondsComponent implements OnInit {

  constructor(public settingScreenLauncherService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }

}
