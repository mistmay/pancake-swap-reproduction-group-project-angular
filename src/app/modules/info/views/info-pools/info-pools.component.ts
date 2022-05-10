import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-info-pools',
  templateUrl: './info-pools.component.html',
  styleUrls: ['./info-pools.component.scss']
})
export class InfoPoolsComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Pools');
  }

}
