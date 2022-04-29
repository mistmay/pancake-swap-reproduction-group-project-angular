import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-earn-passive-pools',
  templateUrl: './earn-passive-pools.component.html',
  styleUrls: ['./earn-passive-pools.component.scss']
})
export class EarnPassivePoolsComponent implements OnInit {

  @Input() b!: any

  count!: String
  integer: number = 0
  decimal: number = 0
  num: number = 59.22
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
