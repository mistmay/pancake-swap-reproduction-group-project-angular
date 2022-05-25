import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-ranks',
  templateUrl: './team-ranks.component.html',
  styleUrls: ['./team-ranks.component.scss']
})
export class TeamRanksComponent implements OnInit {
  ribbonImg: string = '../../../../../assets/svg/team-ranks-trophy.svg';
  ribbonText: string = 'Team Ranks'

  constructor() { }

  ngOnInit(): void {
  }

}
