import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nft-arrival-card',
  templateUrl: './nft-arrival-card.component.html',
  styleUrls: ['./nft-arrival-card.component.scss']
})
export class NftArrivalCardComponent implements OnInit {
  @Input() image!: string;
  @Input() category!: string;
  @Input() title!: string;
  @Input() price!: string;
  @Input() cake!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
