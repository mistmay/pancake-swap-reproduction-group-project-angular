import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ribbon-title',
  templateUrl: './ribbon-title.component.html',
  styleUrls: ['./ribbon-title.component.scss']
})
export class RibbonTitleComponent implements OnInit {
  @Input() ribbonImg!: string;
  @Input() ribbonText!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
