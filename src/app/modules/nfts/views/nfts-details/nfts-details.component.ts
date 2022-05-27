import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { NFTS, RootObject } from 'src/app/models/nfts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nfts-details',
  templateUrl: './nfts-details.component.html',
  styleUrls: ['./nfts-details.component.scss']
})
export class NftsDetailsComponent implements OnInit {
  nfts: RootObject = NFTS;
  currentNft$!: Observable<any>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.currentNft$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (!this.nfts.data.items.find((element: any) => element.collection_address === params.get('collection_address'))) {
          this.router.navigate(['/error']);
          return [];
        } else {
          return this.nfts.data.items.filter((element: any) => element.collection_address === params.get('collection_address'));
        }
      }));
  }

}
