import { Component, Input, OnInit } from '@angular/core';
import { Teams } from 'src/app/models/teams';

@Component({
  selector: 'app-teams-card',
  templateUrl: './teams-card.component.html',
  styleUrls: ['./teams-card.component.scss']
})
export class TeamsCardComponent implements OnInit {

  @Input() team!: Teams

  constructor() { }

  ngOnInit(): void {
  }

}
