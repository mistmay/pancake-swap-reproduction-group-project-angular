import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SyrupPoolsService } from 'src/app/api/syrup-pools.service';
import { Pools } from 'src/app/models/pools';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss']
})

export class FarmsComponent implements OnInit {
  
  subscription!: Subscription
  farms!: Pools[]
  sortedfarms!: Pools[]
  CardView: Boolean = false
  stakedOnly: Boolean = false
  finished: Boolean = false
  sortBy: String = 'Hot'
  searchedKey: string = ""

  constructor(private api: SyrupPoolsService, private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Farms');
    this.farms = (this.api.syrupPools).sort((a, b) => b.apr - a.apr).slice()
    this.sortedfarms = this.api.syrupPools.sort((a, b) => (b.cake.localeCompare(a.cake, undefined, {
      numeric: true,
      sensitivity: "base"
    }))).slice()
  }

}
