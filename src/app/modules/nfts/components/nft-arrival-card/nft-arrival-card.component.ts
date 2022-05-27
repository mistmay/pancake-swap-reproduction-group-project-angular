import { Component, OnInit, Input } from '@angular/core';
import { RootObject } from 'src/app/models/nfts';

@Component({
  selector: 'app-nft-arrival-card',
  templateUrl: './nft-arrival-card.component.html',
  styleUrls: ['./nft-arrival-card.component.scss']
})
export class NftArrivalCardComponent implements OnInit {
  @Input() searchedKey!: string;
  @Input() nfts!: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
