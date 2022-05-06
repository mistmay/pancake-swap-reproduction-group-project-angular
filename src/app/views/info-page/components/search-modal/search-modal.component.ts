import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InfoSearchModalService } from 'src/app/services/info-search-modal.service';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
  @ViewChild('modal') modal!: ElementRef;

  constructor(private modalService: InfoSearchModalService) { }

  ngOnInit(): void {
  }

  closeModal(event: Event): void {
    if (event.target !== this.modal.nativeElement) {
      return;
    } else {
      this.modalService.closeModal();
    }
  }

}
