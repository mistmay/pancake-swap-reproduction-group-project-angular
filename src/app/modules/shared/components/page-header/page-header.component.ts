import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  searchedKey: string = '';
  @Output() searchInput: EventEmitter<string> = new EventEmitter<string>();
  @Input() pageTitle!: string
  @Input() subTitle!: string
  @Input() search: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
