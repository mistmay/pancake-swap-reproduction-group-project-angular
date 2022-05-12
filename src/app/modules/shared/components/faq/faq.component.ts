import { Component, OnInit, Input } from '@angular/core';
import { FaqBox } from 'src/app/models/faq-box';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @Input() faqBoxes!: FaqBox[];
  @Input() title!: String;

  constructor() { }

  ngOnInit(): void {
    this.faqBoxes.forEach((element: FaqBox) => {
      element.showAnswer = false;
    });
  }

}
