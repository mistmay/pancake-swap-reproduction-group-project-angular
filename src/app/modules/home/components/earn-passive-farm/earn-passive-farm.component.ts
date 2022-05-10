import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-earn-passive-farm',
  templateUrl: './earn-passive-farm.component.html',
  styleUrls: ['./earn-passive-farm.component.scss']
})
export class EarnPassiveFarmComponent implements OnInit {

  count!: String
  integer: number = 0
  decimal: number = 0
  num: number = 186.65
  timer!: ReturnType<typeof setInterval>

  constructor() { }

  @Input() a!: any

  ngOnInit(): void {
    this.counts()
  }

  counts: any = () => {
    this.timer = setInterval(() => {
      this.counter();
    }, 10);
  }

  // Cambiare num in base al valore della APY

  counter() {
    let arr = this.num.toString().split(".")
    this.count = `${this.integer++},${this.decimal++}%`;
    if (this.integer == Number(arr[0])) {
      this.count = this.num + "%"
      clearInterval(this.timer);
    }
  }
}
