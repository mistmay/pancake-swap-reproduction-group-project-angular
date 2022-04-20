import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-earn-passive',
  templateUrl: './earn-passive.component.html',
  styleUrls: ['./earn-passive.component.scss']
})
export class EarnPassiveComponent implements OnInit {

  top: boolean = true
  bottom: boolean = false

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    setInterval(() => {
      this.showTop();
    }, 6000);
    setInterval(() => {
      this.showBottom()
    }, 12000)
  }

  cliccabile() {
      this.top = !this.top;
      this.bottom = !this.bottom;
  }

  showTop() {
    if(this.top) {
      this.top = false
    } else {
      this.top = true
    }
  }

  showBottom() {
    if(this.bottom) {
      this.bottom = false
    } else {
      this.bottom = true
    }
  }
}
