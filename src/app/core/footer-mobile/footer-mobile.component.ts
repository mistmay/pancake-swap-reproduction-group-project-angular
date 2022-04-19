import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent implements OnInit {
  showEarnMenu: boolean = false;
  showWinMenu: boolean = false;
  showNftMenu: boolean = false;
  showPointsMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
