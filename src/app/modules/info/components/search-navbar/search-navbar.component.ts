import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { InfoSearchModalService } from 'src/app/services/info-search-modal.service';

@Component({
  selector: 'app-search-navbar',
  templateUrl: './search-navbar.component.html',
  styleUrls: ['./search-navbar.component.scss']
})
export class SearchNavbarComponent implements OnInit, OnDestroy {
  showModal!: boolean;
  isModalUp!: boolean;
  subscriptions: Subscription[] = [];

  constructor(private modalService: InfoSearchModalService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.modalService.getModalStatus()
      .subscribe((res: boolean) => {
        this.showModal = res;
      }));
    this.subscriptions.push(this.modalService.getModalTop()
      .subscribe((res: boolean) => {
        this.isModalUp = res;
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
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
