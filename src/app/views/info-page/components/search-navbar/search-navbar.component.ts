import { Component, OnInit, Input } from '@angular/core';
import { InfoSearchModalService } from 'src/app/services/info-search-modal.service';

@Component({
  selector: 'app-search-navbar',
  templateUrl: './search-navbar.component.html',
  styleUrls: ['./search-navbar.component.scss']
})
export class SearchNavbarComponent implements OnInit {
  showModal!: boolean;
  isModalUp!: boolean;
  @Input() pageChecker!: 'overview' | 'pools' | 'tokens';

  constructor(private modalService: InfoSearchModalService) { }

  ngOnInit(): void {
    this.modalService.getModalStatus()
      .subscribe((res: boolean) => {
        this.showModal = res;
      });
    this.modalService.getModalTop()
      .subscribe((res: boolean) => {
        this.isModalUp = res;
      });
  }

  showSearchModal(): void {
    this.modalService.openModal();
  }

  getModalTop(): string {
    if (!this.isModalUp) {
      return '126px';
    } else {
      return '56px';
    }
  }

}
