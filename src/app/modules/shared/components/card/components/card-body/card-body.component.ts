import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {

  @Input() isCake: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
