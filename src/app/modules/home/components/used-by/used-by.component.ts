import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-used-by',
  templateUrl: './used-by.component.html',
  styleUrls: ['./used-by.component.scss']
})
export class UsedByComponent implements OnInit {

  cards = [
    {
      svg: "../../../../../assets/svg/used-by-people.svg",
      svgColor: "svg-color-1 ",
      title: "4.4 million",
      subTitle: "users",
      body: "in the last 30 days",
      color:"color-1",
    },
    {
      svg: "../../../../../assets/svg/used-by-rings.svg",
      svgColor: "svg-color-2 ",
      title: "38 million",
      subTitle: "trades",
      body: "made in the last 30 days",
      color:"color-2",
    },
    {
      svg: "../../../../../assets/svg/used-by-graph.svg",
      svgColor: "svg-color-3",
      title: "$6 billion",
      subTitle: "staked",
      body: "Total Value Locked",
      color:"color-3",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
