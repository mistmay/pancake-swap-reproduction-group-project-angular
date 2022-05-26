import { Component, OnInit } from '@angular/core';
import { Teams } from 'src/app/models/teams';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  teams: Teams[] = [
    {
      position: 1,
      name: "Syrup Storm",
      image: "/assets/img/syrup-storm-md.png",
      description: "The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!",
      volume: "177.216"
    },
    {
      position: 2,
      name: "Fearsome Flippers",
      image: "/assets/img/fearsome-flippers-md.png",
      description: "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped, too!",
      volume: "161.659"
    },
    {
      position: 3,
      name: "Chaotic Cakers",
      image: "/assets/img/chaotic-cakers-md.png",
      description: "Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!",
      volume: "326.549"
    },

  ]

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Leaderboard');
  }

}
