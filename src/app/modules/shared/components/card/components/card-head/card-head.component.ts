import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-head',
  templateUrl: './card-head.component.html',
  styleUrls: ['./card-head.component.scss']
})
export class CardHeadComponent implements OnInit {
  @Input() poolName!: string
  @Input() poolPrice!: number
  @Input() isCake!: boolean

  constructor() { }

  ngOnInit(): void {
  }

  errorHandler(event: any) {
    console.debug(event);
    event.target.src = `https://bsctools.xyz/pancakeswap/img/${this.poolName}.png`;
 }

}
