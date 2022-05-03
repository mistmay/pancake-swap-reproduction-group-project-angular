import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showLanguageMenuMobile: boolean = false;
  showLanguageMenuDesktop: boolean = false;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
  }

  getCakePrice(): string {
    return this.titleService.cakePrice;
  }

}
