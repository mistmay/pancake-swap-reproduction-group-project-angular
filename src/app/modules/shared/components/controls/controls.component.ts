import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  @Output() CardView = new EventEmitter<boolean>()
  isCardView: Boolean = true
  checked: Boolean = false
  isLive: Boolean = true
  sort: Boolean = false
  sortedByHot: String = "Hot"
  sortedByAPR: String = 'APR'
  sortedByEarned: String = 'Earned'
  sortedByTotalStaked: String = 'Total Staked'
  sortedByLatest: String = 'Latest'
  @Output() stakedOnly = new EventEmitter<boolean>()
  @Output() finished = new EventEmitter<boolean>()
  @Output() sorted = new EventEmitter<String>()
  
  sortedBy: String = this.sortedByHot

  constructor() { }

  ngOnInit(): void {
  }

}