import { Component, OnInit } from '@angular/core';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-check-won',
  templateUrl: './check-won.component.html',
  styleUrls: ['./check-won.component.scss']
})
export class CheckWonComponent implements OnInit {

  constructor(private modalService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.modalService.openModal('connect');
  }

}
