import { Injectable } from '@angular/core';
import { BehaviorSubject, find, Observable } from 'rxjs';
import { Farms } from '../models/farms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmsService {

  farms: BehaviorSubject<Farms[]> = new BehaviorSubject<Farms[]>([])

  constructor(private http: HttpClient) { }

  callApiLiquidity(): Observable<any> {
    return this.http.get<any>("http://localhost:4200/api/pancakeswap/api/farm_lp.php")
  }

  callApiCalc1(): Observable<any> {
    return this.http.get<any>("http://localhost:4200/api/pancakeswap/api/lp_calc.php")
  }

  callApiCalc2(): Observable<any> {
    return this.http.get<any>("http://localhost:4200/api/pancakeswap/api/lp_calc2.php")
  }

  getData(): void {
    this.callApiLiquidity().subscribe((resLiquidity: any) => {
      this.callApiCalc1().subscribe((resCalc1: any) => {
        this.callApiCalc2().subscribe((resCalc2: any) => {

          const CALC: any = Object.entries(
            {
            ...resCalc1, ...resCalc2
          }).filter((el: any) => el[0].includes("_one_lp_value")).map((el: any) => {
            el[0] = el[0].replace("_one_lp_value", "")
            return el
          })          

          const LIQUIDITY: any = Object.entries(
            resLiquidity
          ).map((el: any) => {
            const PAIRNAME = el[0].replace("_", "-")
            el.push(PAIRNAME)
            el[0] = el[0].replace("_", "")     
            return el
          })
          
          const arr: Farms[] = []

          CALC.forEach((el: any) => {
            const FIND = LIQUIDITY.find((item:any) => item[0] === el[0])
            if(FIND) {
              let img!: string
              if(FIND[2] == "cake-bnb" || FIND[2] == 'TINC-BNB'.toLowerCase()) {
                img = "http://localhost:4200/farms_api/token/bsc/btc-cake.png"
              } else {
                img = `http://localhost:4200/farms_api/token/bsc/${FIND[2]}.png`
              }
              arr.push({
                name: FIND[2],
                image: img,
                apr: String(Math.floor(Math.random() * 180)),
                liquidity: Math.floor(el[1] * FIND[1]),
                multiplier: String(Math.floor(Math.random() * 100))
              })
            }
          });
          this.farms.next(arr)
        })
      })
    })
  }

  getObservable(): Observable<Farms[]> {
    return this.farms.asObservable()
  }
  
}
