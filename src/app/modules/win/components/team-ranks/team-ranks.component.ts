import { Component, OnInit } from '@angular/core';
import { CompetitionTable1 } from '../../models/competition-table-1';

@Component({
  selector: 'app-team-ranks',
  templateUrl: './team-ranks.component.html',
  styleUrls: ['./team-ranks.component.scss']
})
export class TeamRanksComponent implements OnInit {
  ribbonImg: string = '../../../../../assets/svg/team-ranks-trophy.svg';
  ribbonText: string = 'Team Ranks';
  tableData1: CompetitionTable1[] = [
    { secondColumn: '$2,734,120', image: 1, link: '0xd2...6b9A' },
    { secondColumn: '$1,801,694', image: 1, link: '0x6E...809b' },
    { secondColumn: '$1,653,915', image: 2, link: '0xAC...4f02' },
    { secondColumn: '$1,441,877', image: 3, link: '0xd5...037b' },
    { secondColumn: '$1,162,805', image: 4, link: '0xB1...Bf06' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
