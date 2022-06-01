import { Component, Input, OnInit } from '@angular/core';
import { Farms } from 'src/app/models/farms';

@Component({
  selector: 'app-farm-card-footer',
  templateUrl: './farm-card-footer.component.html',
  styleUrls: ['./farm-card-footer.component.scss']
})
export class FarmCardFooterComponent implements OnInit {

  @Input() cardFooter: boolean = false
  @Input() farm!: Farms

  constructor() { }

  ngOnInit(): void {
  }

}
