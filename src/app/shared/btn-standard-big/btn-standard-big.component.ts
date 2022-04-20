import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-standard-big',
  templateUrl: './btn-standard-big.component.html',
  styleUrls: ['./btn-standard-big.component.scss']
})
export class BtnStandardBigComponent implements OnInit {
  @Input() content: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
