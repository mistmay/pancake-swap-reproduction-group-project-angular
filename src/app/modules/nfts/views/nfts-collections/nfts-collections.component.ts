import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { NFTS, RootObject } from 'src/app/models/nfts';

@Component({
  selector: 'app-nfts-collections',
  templateUrl: './nfts-collections.component.html',
  styleUrls: ['./nfts-collections.component.scss']
})
export class NftsCollectionsComponent implements OnInit {
  nfts: RootObject = NFTS;
  isCardView: boolean = true;
  currentPage: number = 1;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Collections');
  }

}
