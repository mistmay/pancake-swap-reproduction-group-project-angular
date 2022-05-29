import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SyrupPoolsService } from 'src/app/api/syrup-pools.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.scss']
})
export class PoolsComponent implements OnInit {

  subscription!: Subscription
  pools!: any
  sortedPools!: any
  CardView: Boolean = false
  stakedOnly: Boolean = false
  finished: Boolean = false
  sortBy: String = 'Hot'

  constructor(private api: SyrupPoolsService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Pools');
    this.pools = (this.api.syrupPools).sort((a, b) => b.apr - a.apr).slice()
    this.sortedPools = this.api.syrupPools.sort((a, b) => (a.name > b.name ) ? 1 : ((b.name > a.name) ? -1 : 0)).slice()
  }


}
