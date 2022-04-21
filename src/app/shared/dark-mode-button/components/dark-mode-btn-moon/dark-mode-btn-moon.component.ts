import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dark-mode-btn-moon',
  templateUrl: './dark-mode-btn-moon.component.html',
  styleUrls: ['./dark-mode-btn-moon.component.scss']
})
export class DarkModeBtnMoonComponent implements OnInit {
  @Input() moonCheck: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
