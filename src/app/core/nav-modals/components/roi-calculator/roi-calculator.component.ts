import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roi-calculator',
  templateUrl: './roi-calculator.component.html',
  styleUrls: ['./roi-calculator.component.scss']
})
export class RoiCalculatorComponent implements OnInit {
  showDetails: boolean = false;
  inputValue: number = 0;
  inputValue2: number = 0;
  stakedFor: boolean[] = [false, false, false, true, false];
  currencyInput1: 'USD' | 'CAKE' = 'USD';
  currencyInput2: 'USD' | 'CAKE' = 'CAKE';
  showCurrentRates: boolean = false;
  currentRatesValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  updatestakedFor(index: number): void {
    for (let i: number = 0; i < this.stakedFor.length; i++) {
      this.stakedFor[i] = false;
    }
    this.stakedFor[index] = true;
  }

  switchInputs(): void {
    const input1: number = this.inputValue;
    const currency1: 'USD' | 'CAKE' = this.currencyInput1;
    const input2: number = this.inputValue2;
    const currency2: 'USD' | 'CAKE' = this.currencyInput2;
    this.inputValue = input2;
    this.currencyInput1 = currency2;
    this.inputValue2 = input1;
    this.currencyInput2 = currency1;
  }

  putUsd(number: number): void {
    if (this.currencyInput1 === 'USD') {
      this.inputValue = number;
    } else {
      this.inputValue2 = number;
    }
  }

}
