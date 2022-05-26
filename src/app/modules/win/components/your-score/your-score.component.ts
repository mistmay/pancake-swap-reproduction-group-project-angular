import { Component, OnInit } from '@angular/core';
import { SettingScreenLauncherService } from 'src/app/services/setting-screen-launcher.service';

@Component({
  selector: 'app-your-score',
  templateUrl: './your-score.component.html',
  styleUrls: ['./your-score.component.scss']
})
export class YourScoreComponent implements OnInit {

  constructor(private modalService: SettingScreenLauncherService) { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.modalService.openModal('connect');
  }

}
