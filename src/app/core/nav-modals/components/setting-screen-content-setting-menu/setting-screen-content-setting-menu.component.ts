import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-screen-content-setting-menu',
  templateUrl: './setting-screen-content-setting-menu.component.html',
  styleUrls: ['./setting-screen-content-setting-menu.component.scss']
})
export class SettingScreenContentSettingMenuComponent implements OnInit {
  firstButtonForm: boolean[] = [true, false, false];
  secondButtonForm: boolean[] = [false, true, false];
  secondButtonFormValue: number = 0.50;

  constructor() { }

  ngOnInit(): void {
  }

  updateFirstButtonForm(index: number): void {
    for (let i: number = 0; i < this.firstButtonForm.length; i++) {
      this.firstButtonForm[i] = false;
    }
    this.firstButtonForm[index] = true;
  }

  updateSecondButtonForm(index: number): void {
    for (let i: number = 0; i < this.secondButtonForm.length; i++) {
      this.secondButtonForm[i] = false;
    }
    this.secondButtonForm[index] = true;
    switch (index) {
      case 0:
        this.secondButtonFormValue = 0.10;
        break;
      case 1:
        this.secondButtonFormValue = 0.50;
        break;
      case 2:
        this.secondButtonFormValue = 1.00;
        break;
    }
  }

}
