import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-ifo-header',
  templateUrl: './ifo-header.component.html',
  styleUrls: ['./ifo-header.component.scss']
})
export class IfoHeaderComponent implements OnInit {

  constructor(private darkMode: DarkModeService) { }

  ngOnInit(): void {
  }

  darkModeStatus(): boolean {
    return this.darkMode.darkModeStatus;
  }

}
