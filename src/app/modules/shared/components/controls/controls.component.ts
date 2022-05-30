import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Output() CardView = new EventEmitter<boolean>()
  isCardView: Boolean = false
  checked: Boolean = false
  isLive: Boolean = true
  sort: Boolean = false
  sortedByHot: string = "Hot"
  sortedByAPR: string = 'APR'
  sortedByEarned: string = 'Earned'
  sortedByTotalStaked: string = 'Total Staked'
  sortedByLatest: string = 'Latest'
  @Input() isFarms: boolean = false
  searched: string = ""


  @Output() stakedOnly = new EventEmitter<boolean>()
  @Output() finished = new EventEmitter<boolean>()
  @Output() sorted = new EventEmitter<string>()
  @Output() onSearch = new EventEmitter<string>()
  
  sortedBy: string = this.sortedByHot

  constructor() { }

  ngOnInit(): void {
  }

}
