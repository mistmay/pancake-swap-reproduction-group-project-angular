import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
