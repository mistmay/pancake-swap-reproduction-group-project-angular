import { Component, Input, OnInit } from '@angular/core';
import { Farms } from 'src/app/models/farms';
import { Pools } from 'src/app/models/pools';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() poolName!: string
  @Input() poolPrice!: number

  @Input() isCake: boolean = true
  @Input() cakes!: string
  @Input() isPools!: boolean
  @Input() isFarms!: boolean
  @Input() pool!: Pools
  @Input() farm!: Farms

  constructor() { }

  ngOnInit(): void {
    
  }

}
