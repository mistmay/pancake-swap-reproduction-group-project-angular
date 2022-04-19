import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-standard-small',
  templateUrl: './btn-standard-small.component.html',
  styleUrls: ['./btn-standard-small.component.scss']
})
export class BtnStandardSmallComponent implements OnInit {
  @Input() content: string = '';
  @Input() arrowCheck: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
