import { Component, OnInit } from '@angular/core';
import { InfoSearchModalService } from 'src/app/services/info-search-modal.service';

@Component({
  selector: 'app-footer-mobile',
  templateUrl: './footer-mobile.component.html',
  styleUrls: ['./footer-mobile.component.scss']
})
export class FooterMobileComponent implements OnInit {
  showEarnMenu: boolean = false;
  showWinMenu: boolean = false;
  showNftMenu: boolean = false;
  showPointsMenu: boolean = false;

  constructor(private infoSearch: InfoSearchModalService) { }

  ngOnInit(): void {
  }

  closeSearchModal(): void {
    this.infoSearch.closeModal();
  }

}
