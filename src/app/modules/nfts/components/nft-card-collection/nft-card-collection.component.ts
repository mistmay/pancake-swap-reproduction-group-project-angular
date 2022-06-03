import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nft-card-collection',
  templateUrl: './nft-card-collection.component.html',
  styleUrls: ['./nft-card-collection.component.scss']
})
export class NftCardCollectionComponent implements OnInit {
  @Input() searchedKey!: string;
  @Input() nfts!: any[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetails(address: string): void {
    this.router.navigate(['/nfts', 'collections', address]);
  }



}
