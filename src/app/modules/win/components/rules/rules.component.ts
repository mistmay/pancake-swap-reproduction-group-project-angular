import { Component, OnInit } from '@angular/core';
import { FaqBox } from 'src/app/models/faq-box';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {
  ribbonImg: string = '../../../../../assets/svg/competition-rules.svg';
  ribbonText: string = 'Rules';
  faq: FaqBox[] = [
    {
      question: 'Eligible trading pairs',
      answer: 'Only trades on DAR/BNB, CAKE/BNB, and CAKE/BUSD pairs will be included in volume calculations. Please note that the volume from limit orders will not be included.',
      showAnswer: false
    },
    {
      question: 'Calculating team ranks and winners',
      answer: `- Team ranks are calculated by the total combined volume of the top 500 members of each respective team.\n
      - The final winning team will be the team with the highest total volume score at the end of the competition period.`,
      showAnswer: false
    },
    {
      question: 'Prize distribution',
      answer: `- Prizes to be distributed in CAKE and DAR in a distribution of 1:5 and shared by all members of each respective tier.\n
      - The price of token prizes ($CAKE and $DAR) in USD will be determined as per their BUSD pair price during the tally period.\n
      - Every participant will win at least one prize at the end of the competition.`,
      showAnswer: false
    },
    {
      question: 'Fine print',
      answer: `- In the event of a disagreement concerning the final winning team or rank, PancakeSwap will have the final say.\n
      - PancakeSwap can and will disqualify any team or specific members that are proven to have taken malicious action or attempt to “cheat” in any way.`,
      showAnswer: false
    },
    {
      question: 'Can I join the battle after it starts?',
      answer: `Sorry, no. You need to register during the registration period, before the start of the event.`,
      showAnswer: false
    },
    {
      question: 'How do I know if I successfully registered?',
      answer: `At the top of the page, the text in the button “I Want to Battle” will change to “Registered”.`,
      showAnswer: false
    },
    {
      question: 'How can I see my current rank?',
      answer: `Check Your Score section on the event page. You’ll need to connect your wallet, of course.`,
      showAnswer: false
    },
    {
      question: 'How do I claim my prize(s)?',
      answer: `After the battle ends, visit the event page and click the “Claim Prizes” button in the top section or in “Your Score” section. 
      Once you claim your prizes successfully, the button text will change to “Prizes Claimed”.`,
      showAnswer: false
    }
  ];
  faqSides: [string, string][] = [
    ['Trade to increase your rank', 'Eligible pairs: DAR/BNB, CAKE/BNB, and CAKE/BUSD. Please note that the volume from limit orders will not be indexed.'],
    ['Play as a team', 'The higher your team’s rank, the better your prizes!'],
    ['Everyone’s a winner!', 'Sign up for battle and you’re guaranteed a prize!']
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
