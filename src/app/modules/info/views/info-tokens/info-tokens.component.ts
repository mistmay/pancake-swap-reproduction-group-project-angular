import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-info-tokens',
  templateUrl: './info-tokens.component.html',
  styleUrls: ['./info-tokens.component.scss']
})
export class InfoTokensComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Tokens');
  }

}
