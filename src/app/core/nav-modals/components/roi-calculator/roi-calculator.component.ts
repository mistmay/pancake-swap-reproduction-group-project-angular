import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roi-calculator',
  templateUrl: './roi-calculator.component.html',
  styleUrls: ['./roi-calculator.component.scss']
})
export class RoiCalculatorComponent implements OnInit {
  showDetails: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
