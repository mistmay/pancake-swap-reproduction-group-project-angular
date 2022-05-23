import { APP_ID, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SyrupPoolsService } from 'src/app/api/syrup-pools.service';
import { Pools } from 'src/app/models/pools';

@Component({
  selector: 'app-pools',
  templateUrl: './pools.component.html',
  styleUrls: ['./pools.component.scss']
})
export class PoolsComponent implements OnInit {

  subscription!: Subscription
  pools!: any

  constructor(private api: SyrupPoolsService) { }

  ngOnInit(): void {
    this.pools = Object.entries(this.api.syrupPools).sort((a ,b) => b[1] - a[1]).slice(0, 10)
  }  


}
