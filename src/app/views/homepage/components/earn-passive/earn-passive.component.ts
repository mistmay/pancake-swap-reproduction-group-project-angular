import { Time } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-earn-passive',
  templateUrl: './earn-passive.component.html',
  styleUrls: ['./earn-passive.component.scss']
})
export class EarnPassiveComponent implements OnInit {

  top: boolean = true
  timer!: any

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.toggle()
  }

  cliccabile() {
    this.top = !this.top;
    clearInterval(this.timer)
    this.toggle()
}

  toggle: any = () => {
    this.timer = setInterval(() => {
      this.showTop();
    }, 6000);
  }

  showTop() {
    if(this.top) {
      this.top = false
    } else {
      this.top = true
    }
  }

}
