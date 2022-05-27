import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nft-arrival-card',
  templateUrl: './nft-arrival-card.component.html',
  styleUrls: ['./nft-arrival-card.component.scss']
})
export class NftArrivalCardComponent implements OnInit {
  @Input() searchedKey!: string;
  @Input() nfts!: any[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetails(address: string): void {
    this.router.navigate(['/nfts', 'collections', address]);
  }

}
