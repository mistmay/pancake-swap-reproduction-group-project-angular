import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SyrupPoolsService } from 'src/app/api/syrup-pools.service';
import { Pools } from 'src/app/models/pools';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.scss']
})
export class PoolsComponent implements OnInit, OnDestroy {

  subscription!: Subscription
  pools!: Pools[]
  sortedPools!: Pools[]
  CardView: Boolean = false
  stakedOnly: Boolean = false
  finished: Boolean = false
  sortBy: String = 'Hot'
  searchedKey: string = ""
  poolPrice!: Object

  constructor(private api: SyrupPoolsService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Pools')
    this.api.getData()
    this.subscription = this.api.getObservable().subscribe((res: Pools[]) => {
      this.pools = res.sort((a, b) => b.apr - a.apr).slice()
      this.sortedPools = res.sort((a, b) => (String(b.cake).localeCompare(String(a.cake), undefined, {
        numeric: true,
        sensitivity: "base"
      }))).slice()
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }



}
