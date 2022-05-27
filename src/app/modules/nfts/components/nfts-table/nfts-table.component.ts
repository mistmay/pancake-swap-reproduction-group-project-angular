import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nfts-table',
  templateUrl: './nfts-table.component.html',
  styleUrls: ['./nfts-table.component.scss']
})
export class NftsTableComponent implements OnInit {
  @Input() nfts!: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
