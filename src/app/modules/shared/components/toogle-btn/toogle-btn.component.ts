import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toogle-btn',
  templateUrl: './toogle-btn.component.html',
  styleUrls: ['./toogle-btn.component.scss']
})
export class ToogleBtnComponent implements OnInit {
  @Input() toogleId: string = '';
  @Input() pancakeButter: boolean = false;
  labelActivated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  labelActivation(): void {
    if (this.labelActivated) {
      this.labelActivated = false;
    } else {
      this.labelActivated = true;
    }
  }

}
