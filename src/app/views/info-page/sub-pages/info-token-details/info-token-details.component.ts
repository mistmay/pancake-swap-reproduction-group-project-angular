import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoingeckoApiService } from 'src/app/api/coingecko-api.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-info-token-details',
  templateUrl: './info-token-details.component.html',
  styleUrls: ['./info-token-details.component.scss']
})
export class InfoTokenDetailsComponent implements OnInit, OnDestroy {
  isVolumeSelected: boolean = true;
  id!: string;
  token!: any;
  subscriptions: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute, private api: CoingeckoApiService, private titleService: TitleService, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.subscriptions.push(this.activatedRoute.params.subscribe((val: Params) => {
      this.id = val['id'];
      this.subscriptions.push(this.api.getTokenById(this.id)
        .subscribe((res: any) => {
          this.token = res;
          this.titleService.setTitle(this.token.symbol.toUpperCase());
        }));
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

}
