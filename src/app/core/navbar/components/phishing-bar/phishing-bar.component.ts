import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-phishing-bar',
  templateUrl: './phishing-bar.component.html',
  styleUrls: ['./phishing-bar.component.scss']
})
export class PhishingBarComponent implements OnInit {
  @Output() closePhishingBar = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  hide(): void {
    this.closePhishingBar.emit();
  }

}
