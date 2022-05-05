import { Component, Input, OnInit } from '@angular/core';
import { UsedByCard } from 'src/app/models/Used-By-Card';

@Component({
  selector: 'app-used-by-card',
  templateUrl: './used-by-card.component.html',
  styleUrls: ['./used-by-card.component.scss']
})
export class UsedByCardComponent implements OnInit {

  @Input() card!: UsedByCard
  @Input() marginEnd!: string

  constructor() { }

  ngOnInit(): void {
  }

}
