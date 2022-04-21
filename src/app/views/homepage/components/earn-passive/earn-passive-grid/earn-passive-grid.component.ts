import { Component, Input, OnInit, HostBinding  } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-earn-passive-grid',
  templateUrl: './earn-passive-grid.component.html',
  styleUrls: ['./earn-passive-grid.component.scss'],
  animations: [
    trigger("showHide",[
      state("open", style({
        marginTop: "0%",
        opacity: 1,
      })),
      state("close", style({
        marginTop: "50%",
        opacity: 0,
      })),
      transition('open => closed', [
        animate("0.4s ease-out")
      ]),
      transition('closed => open', [
        animate("0.4s ease-out")
      ]),
    ])
  ]
})
export class EarnPassiveGridComponent implements OnInit {

  @Input() top!: any

  constructor() { }

  ngOnInit(): void {
  }

}
