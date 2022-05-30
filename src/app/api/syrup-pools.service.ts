import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pools } from '../models/pools';
import { from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SyrupPoolsService {

  @Output() dataFromApi = new EventEmitter<void>()

  syrupPools!: Pools[]
  checkApi: boolean = false
  
  constructor(private http: HttpClient) {

  }

  emitDataFromApi():void {
    this.dataFromApi.emit()
  }

  getData(): Observable<any> {
    return this.http.get<any>("http://localhost:4200/api/pancakeswap/api/pools_syrup.php")
  }

  getPoolsPrice():void {
    this.getData().subscribe((res: any) => {
      this.syrupPools = [
        {
          name: "mix",
          apr: 85.61,
          cake: String(res["mix_in_syrup_pool"])
        },
        {
          name: "metis",
          apr: 28.61,
          cake: String(res["metis_in_syrup_pool"])
        },    {
          name: "gal",
          apr: 16.37,
          cake: String(res["gal_in_syrup_pool"])
        },
        {
          name: "ankr",
          apr: 24.04,
          cake: String(res["ankr_in_syrup_pool"])
        },
        {
          name: "froyo",
          apr: 45.02,
          cake: String(res["froyo_in_syrup_pool"])
        },
        {
          name: "cake",
          apr: 113.85,
          cake: String(res["cake_new_in_syrup_pool"])
        },
      ]
      this.emitDataFromApi()
    }
    )
  }

}
