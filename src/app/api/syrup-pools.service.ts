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

  syrupPools : Pools[] = [
    {
      name: "mix",
      apr: 85.61,
      cake: "5,545,871"
    },
    {
      name: "metis",
      apr: 28.61,
      cake: "4,169,115"
    },    {
      name: "gal",
      apr: 16.37,
      cake: "8,167,075"
    },
    {
      name: "ankr",
      apr: 24.04,
      cake: "3,169,242"
    },
    {
      name: "froyo",
      apr: 45.02,
      cake: "2,687,715"
    },
  ]
}
