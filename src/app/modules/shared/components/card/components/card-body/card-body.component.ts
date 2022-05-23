import { Component, Input, OnInit } from '@angular/core';
import { SyrupPoolsService } from 'src/app/api/syrup-pools.service';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {

  @Input() isCake: boolean = true
  @Input() poolName!: string
  @Input() poolPrice!: number

  count!: String
  integer: number = 0
  decimal: number = 0
  timer!: ReturnType<typeof setInterval>

  constructor() { }

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
    let arr = ((this.poolPrice)).toString().split(".")
    this.count = `${this.integer++}.${(String(this.decimal++)).split("").splice(0,2).join("")}%`;
    if (this.integer == Number(arr[0]) || this.decimal == Number(arr[1])) {
      this.count = (this.poolPrice).toFixed(2) + "%"
      clearInterval(this.timer);
    }
  }

}
