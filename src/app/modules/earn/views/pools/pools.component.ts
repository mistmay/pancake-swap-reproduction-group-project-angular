import { Component, OnInit } from '@angular/core';
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

  constructor(private api: SyrupPoolsService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Pools');
    this.pools = Object.entries(this.api.syrupPools).sort((a, b) => b[1] - a[1]).slice(0, 10)
  }


}
