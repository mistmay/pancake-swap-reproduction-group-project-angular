import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoingeckoApiService } from 'src/app/api/coingecko-api.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-info-token-details',
  templateUrl: './info-token-details.component.html',
  styleUrls: ['./info-token-details.component.scss']
})
export class InfoTokenDetailsComponent implements OnInit {
  isVolumeSelected: boolean = true;
  id!: string;
  token!: any;

  constructor(private activatedRoute: ActivatedRoute, private api: CoingeckoApiService, private titleService: TitleService, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.activatedRoute.params.subscribe((val: Params) => {
      this.id = val['id'];
      this.api.getTokenById(this.id)
        .subscribe((res: any) => {
          this.token = res;
          this.titleService.setTitle(this.token.symbol.toUpperCase());
        });
    });
  }

}
