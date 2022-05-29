import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss']
})
export class FarmsComponent implements OnInit {

  CardView: Boolean = true
  stakedOnly: Boolean = false
  finished: Boolean = false
  sortBy: String = 'Hot'

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Farms');
  }

}
