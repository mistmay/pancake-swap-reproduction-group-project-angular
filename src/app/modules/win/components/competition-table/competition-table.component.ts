import { Component, OnInit, Input } from '@angular/core';
import { CompetitionTable1 } from '../../models/competition-table-1';
import { CompetitionTable2 } from '../../models/competition-table-2';

@Component({
  selector: 'app-competition-table',
  templateUrl: './competition-table.component.html',
  styleUrls: ['./competition-table.component.scss']
})
export class CompetitionTableComponent implements OnInit {
  @Input() hasRightHeader!: boolean;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() isType1!: boolean;
  @Input() tableData1!: CompetitionTable1[];
  @Input() tableData2!: CompetitionTable2[];
  @Input() hasFooterText!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  returnImage(type: 1 | 2 | 3 | 4): string {
    let result: string;
    switch (type) {
      case 1:
        result = "../../../../../assets/img/claire-1000.png";
        break;
      case 2:
        result = "../../../../../assets/img/dollop-1000.png";
        break;
      case 3:
        result = "../../../../../assets/img/pancake-squad-5059-1000.png";
        break;
      case 4:
        result = "../../../../../assets/img/sunny-1000.png"
        break;
    }
    return result;
  }

  returnTierImage(tier: 'gold' | 'silver' | 'bronze' | 'purple' | 'teal'): string {
    return `../../../../../assets/svg/competition-prizes-${tier}.svg`;
  }

  returnTierColor(tier: 'gold' | 'silver' | 'bronze' | 'purple' | 'teal'): string {
    let result: string;
    switch (tier) {
      case 'gold':
        result = 'rgb(255, 191, 51)';
        break;
      case 'silver':
        result = 'rgb(193, 193, 193)';
        break;
      case 'bronze':
        result = 'rgb(231, 149, 89)';
        break;
      case 'purple':
        result = 'rgb(165, 124, 253)';
        break;
      case 'teal':
        result = 'rgb(76, 210, 221)';
        break;
    }
    return result;
  }

  returnAchievementsImage(achievements: 2500 | 1250 | 1000 | 850 | 500): string {
    let result: string;
    switch (achievements) {
      case 2500:
        result = "../../../../../assets/svg/MoD-champion-gold.svg";
        break;
      case 1250:
        result = "../../../../../assets/svg/MoD-top-500-gold.svg";
        break;
      case 1000:
        result = "../../../../../assets/svg/MoD-top-100-gold.svg";
        break;
      case 850:
        result = "../../../../../assets/svg/MoD-top-10-gold.svg";
        break;
      case 500:
        result = "../../../../../assets/svg/MoD-participant-gold.svg";
        break;
    }
    return result;
  }

}
