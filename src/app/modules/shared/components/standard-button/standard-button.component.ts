import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-standard-button',
  templateUrl: './standard-button.component.html',
  styleUrls: ['./standard-button.component.scss']
})
export class StandardButtonComponent implements OnInit {
  @Input() content: string = '';
  @Input() arrowCheck: boolean = false;
  @Input() isTransparent: boolean = false;
  @Input() isSmall: boolean = false;
  @Input() isBlue: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
