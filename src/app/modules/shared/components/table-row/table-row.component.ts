import { Component, Input, OnInit } from '@angular/core';
import { Farms } from 'src/app/models/farms';
import { Pools } from 'src/app/models/pools';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {

  @Input() isPools!: boolean
  @Input() isFarms!: boolean
  @Input() pool!: Pools
  @Input() farm!: Farms
  
  constructor() { }

  ngOnInit(): void {
  }


}
