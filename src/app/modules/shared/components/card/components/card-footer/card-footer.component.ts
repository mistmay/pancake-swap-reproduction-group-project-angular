import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.scss']
})
export class CardFooterComponent implements OnInit {

  cardFooter: boolean = false
  @Input() isCake!: boolean

  constructor() { }

  ngOnInit(): void {
  }

  toggleCardFooter() {
    this.cardFooter = !this.cardFooter
  }

}
