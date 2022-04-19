import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dark-mode-btn-sun',
  templateUrl: './dark-mode-btn-sun.component.html',
  styleUrls: ['./dark-mode-btn-sun.component.scss']
})
export class DarkModeBtnSunComponent implements OnInit {
  @Input() isActivated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
