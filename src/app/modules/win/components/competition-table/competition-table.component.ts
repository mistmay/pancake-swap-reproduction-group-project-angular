import { Component, OnInit, Input } from '@angular/core';
import { CompetitionTable1 } from '../../models/competition-table-1';

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

}
