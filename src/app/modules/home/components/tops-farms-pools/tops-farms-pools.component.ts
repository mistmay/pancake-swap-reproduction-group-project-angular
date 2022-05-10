import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tops-farms-pools',
  templateUrl: './tops-farms-pools.component.html',
  styleUrls: ['./tops-farms-pools.component.scss']
})
export class TopsFarmsPoolsComponent implements OnInit {
  top: boolean = true
  timer!: ReturnType<typeof setInterval>

  constructor() { }

  ngOnInit(): void {
    this.resetTimer()
  }

  cliccabile() {
    this.top = !this.top;
    clearInterval(this.timer)
    this.resetTimer()
  }

  resetTimer = () => {
    this.timer = setInterval(() => {
      this.showTop();
    }, 6000);
  }

  showTop() {
    if (this.top) {
      this.top = false
    } else {
      this.top = true
    }
  }

}
