import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-transparent',
  templateUrl: './btn-transparent.component.html',
  styleUrls: ['./btn-transparent.component.scss']
})
export class BtnTransparentComponent implements OnInit {
  @Input() content: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
