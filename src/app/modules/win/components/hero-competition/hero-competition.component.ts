import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-competition',
  templateUrl: './hero-competition.component.html',
  styleUrls: ['./hero-competition.component.scss']
})
export class HeroCompetitionComponent implements OnInit {
  date!: Date;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
  }

}
