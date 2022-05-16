import { Component, Input, OnInit } from '@angular/core';
import { Data, NFTS, RootObject } from 'src/app/models/nfts';

@Component({
  selector: 'app-nft-card-collection',
  templateUrl: './nft-card-collection.component.html',
  styleUrls: ['./nft-card-collection.component.scss']
})
export class NftCardCollectionComponent implements OnInit {

  @Input() nfts!: any

  constructor() { }

  ngOnInit(): void {
  }



}
