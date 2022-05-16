import { Component, Input, OnInit } from '@angular/core';

interface HeroNav {
  name: string
  link: string
}

@Component({
  selector: 'app-hero-nav',
  templateUrl: './hero-nav.component.html',
  styleUrls: ['./hero-nav.component.scss']
})

export class HeroNavComponent implements OnInit {

  _heroNav: HeroNav[] = [
    {
      name: "",
      link: ""
    }
  ]

  @Input() set heroNav(value: Partial<HeroNav[]>) {
    this._heroNav = [...this._heroNav, ...value] as HeroNav[]
    
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this._heroNav)
  }

}
