import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nfts-table',
  templateUrl: './nfts-table.component.html',
  styleUrls: ['./nfts-table.component.scss']
})
export class NftsTableComponent implements OnInit {
  @Input() nfts!: any[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetails(address: string): void {
    this.router.navigate(['/nfts', 'collections', address]);
  }

}
