import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-dark-mode-button',
  templateUrl: './dark-mode-button.component.html',
  styleUrls: ['./dark-mode-button.component.scss']
})
export class DarkModeButtonComponent implements OnInit {

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }

  darkModeActivation(): void {
    this.darkModeService.darkModeActivation();
  }

  darkModeStatus(): boolean {
    return this.darkModeService.darkModeStatus;
  }

}
