import { Component, OnInit } from '@angular/core';
import { Data, NFTS, RootObject } from 'src/app/models/nfts';

@Component({
  selector: 'app-nft-overview',
  templateUrl: './nft-overview.component.html',
  styleUrls: ['./nft-overview.component.scss']
})
export class NftOverviewComponent implements OnInit {

  nfts: RootObject = NFTS

  constructor() { }

  ngOnInit(): void {
  }

}
