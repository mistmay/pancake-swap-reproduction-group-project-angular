import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-btn',
  templateUrl: './accordion-btn.component.html',
  styleUrls: ['./accordion-btn.component.scss']
})
export class AccordionBtnComponent implements OnInit {
  text: 'Details' | 'Hide' = 'Details';
  rotate: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeBtn(): void {
    if (this.text === 'Details') {
      this.text = 'Hide';
    } else {
      this.text = 'Details';
    }
    this.rotate = !this.rotate;
  }

}
