import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { InfoSearchModalService } from 'src/app/services/info-search-modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() changeMarginTop = new EventEmitter<void>();
  showPhishingBar: boolean = true;
  scrollPos: number = 0;
  hideHeader: boolean = false;

  constructor(private infoSearch: InfoSearchModalService) { }

  ngOnInit(): void {
  }

  hidePhishingBar(): void {
    this.showPhishingBar = false;
    this.changeMarginTop.emit();
    this.infoSearch.isModalUp.next(true);
  }

  @HostListener('window:scroll', ['$event'])
  checkScrollPosition(): void {
    const currentScrollPos: number = window.pageYOffset;
    const prevScrollPos: number = this.scrollPos;
    this.scrollPos = currentScrollPos;
    if (prevScrollPos > currentScrollPos) {
      this.hideHeader = false;
    } else {
      this.hideHeader = true;
    }
  }

  getHeaderTop(): string {
    return this.hideHeader ? '-126px' : '0';
  }

  closeSearchModal(): void {
    this.infoSearch.closeModal();
  }

}
