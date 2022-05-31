import { Component, Input, OnInit } from '@angular/core';
import { Farms } from 'src/app/models/farms';
import { Pools } from 'src/app/models/pools';

@Component({
  selector: 'app-card-head',
  templateUrl: './card-head.component.html',
  styleUrls: ['./card-head.component.scss']
})
export class CardHeadComponent implements OnInit {
  @Input() poolName!: string
  @Input() poolPrice!: number
  @Input() isCake!: boolean
  @Input() isFarms!: boolean
  @Input() farm!: Farms
  @Input() pool!: Pools



  constructor() { }

  ngOnInit(): void {
  }

  errorHandler(event: any) {
    console.debug(event);
    event.target.src = `https://bsctools.xyz/pancakeswap/img/${this.poolName}.png`;
 }

}
