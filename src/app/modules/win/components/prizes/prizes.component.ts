import { Component, OnInit } from '@angular/core';
import { CompetitionTable2 } from '../../models/competition-table-2';

@Component({
  selector: 'app-prizes',
  templateUrl: './prizes.component.html',
  styleUrls: ['./prizes.component.scss']
})
export class PrizesComponent implements OnInit {
  ribbonImg: string = '../../../../../assets/svg/competition-prizes.svg';
  ribbonText: string = 'Prizes';
  tableData2: CompetitionTable2[] = [
    { rank: '1', tier: 'gold', prizes: '$10.800', achievements: 2500, hasNft: true },
    { rank: '2 ~ 10', tier: 'silver', prizes: '$25.200', achievements: 1250, hasNft: true },
    { rank: '11 ~ 100', tier: 'bronze', prizes: '$21.600', achievements: 1000, hasNft: true },
    { rank: '101 ~ 500', tier: 'purple', prizes: '$14.400', achievements: 850, hasNft: false },
    { rank: '501+', tier: 'teal', prizes: '$0', achievements: 500, hasNft: false }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
