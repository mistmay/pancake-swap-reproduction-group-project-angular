import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pools } from '../models/pools';
import { BehaviorSubject, from, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SyrupPoolsService {

  syrupPools: BehaviorSubject<Pools[]> = new BehaviorSubject<Pools[]>([])
  
  constructor(private http: HttpClient) {

  }

  callApi(): Observable<any> {
    return this.http.get<any>("http://localhost:4200/api/pancakeswap/api/pools_syrup.php")
  }

  getData(): void {
    this.callApi().subscribe((res: any) => {
      this.syrupPools.next(
        [
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
      ])
    })
  }

  getObservable(): Observable<Pools[]> {
    return this.syrupPools.asObservable()
  }


}
