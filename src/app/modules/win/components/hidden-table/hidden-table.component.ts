import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden-table',
  templateUrl: './hidden-table.component.html',
  styleUrls: ['./hidden-table.component.scss']
})
export class HiddenTableComponent implements OnInit {
  matchArray: [number, number][] = [
    [479, 2.046], [722, 3.091], [1204, 5.154], [2407, 10.308], [4814, 20.615], [9629, 41.240]
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
