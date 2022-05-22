import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { FaqBox } from 'src/app/models/faq-box';

@Component({
  selector: 'app-ifo',
  templateUrl: './ifo.component.html',
  styleUrls: ['./ifo.component.scss']
})
export class IfoComponent implements OnInit {
  faq: FaqBox[] = [
    {
      question: 'What’s the difference between a Public Sale and Private Sale?',
      answer: `In the new IFO 3.1 format. There is a brand new Private Sale. To participate, participants will have to meet certain requirements presented on the IFO card. Each eligible participant will be able to commit any amount of CAKE up to the maximum commit limit, which is published along with the IFO voting proposal. The Private Sale has no participation fee.\n
      In the Public Sale, everyone with an active PancakeSwap profile can commit. However the maximum amount of CAKE user can commit, is equal to the average CAKE balance in the IFO CAKE pool prior to the IFO. And there’s a fee for participation: see below.`,
      showAnswer: false
    },
    {
      question: 'Which sale should I commit to? Can I do both?',
      answer: `You can choose one or both at the same time!\n
      We recommend you to check if you are eligible to participate in the Private Sale first. In the Public Sale, if the amount you commit is too small, you may not receive a meaningful amount of IFO tokens.\n
      Just remember you need an active PancakeSwap Profile in order to participate.`,
      showAnswer: false
    },
    {
      question: 'How much is the participation fee?',
      answer: `There’s only a participation fee for the Public Sale: there’s no fee for the Private Sale.\n
      The fee will start at 0.5%.\n
      The 1% participation fee decreases in cliffs, based on the percentage of overflow from the “Public Sale” portion of the IFO.`,
      showAnswer: false
    },
    {
      question: 'Where does the participation fee go?',
      answer: `The CAKE from the participation fee will be burnt as part of the weekly token burn.`,
      showAnswer: false
    },
    {
      question: 'How can I get an achievement for participating in the IFO?',
      answer: `You need to contribute a minimum of about 10 USD worth of CAKE to either sale.\n
      You can contribute to one or both, it doesn’t matter: only your overall contribution is counted for the achievement.`,
      showAnswer: false
    }
  ]

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Initial Farm Offering');
  }

}
