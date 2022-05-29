import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pools } from '../models/pools';


@Injectable({
  providedIn: 'root'
})
export class SyrupPoolsService {


  constructor(private http: HttpClient) {
    // this.headers.set('Content-Type', 'application/json');
  }

  //  getData(): Observable<any> {
  //   return from(
  //     fetch(
  //       'https://bsctools.xyz/pancakeswap/api/farm_rewards_blocks.php', // the url you are trying to access
  //       {
  //         headers: {
  //           'Content-Type': 'application/json; charset=utf-8',
  //         },
  //         method: 'GET', // GET, POST, PUT, DELETE
  //         mode: 'no-cors' // the most important option
  //       }
  //     ));
  // }

  syrupPools : Pools = {
    "mix": 85.61,
    "metis": 28.61,
    "gal": 6.37,
    "ankr": 24.04,
    "froyo": 45.02,
  }
}
