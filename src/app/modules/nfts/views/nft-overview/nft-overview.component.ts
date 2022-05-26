import { Component, OnInit } from '@angular/core';
import { FaqBox } from 'src/app/models/faq-box';
import { NFTS, RootObject } from 'src/app/models/nfts';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-nft-overview',
  templateUrl: './nft-overview.component.html',
  styleUrls: ['./nft-overview.component.scss']
})
export class NftOverviewComponent implements OnInit {

  nfts: RootObject = NFTS
  faqBox: FaqBox[] = [
    {
      question: "I sold an NFT, where’s my BNB?",
      answer: "Trades are settled in WBNB, which is a wrapped version of BNB used on BNB Smart Chain. That means that when you sell an item, WBNB is sent to your wallet instead of BNB. You can instantly swap your WBNB for BNB with no trading fees on PancakeSwap.",
      showAnswer: false
    },
    {
      question: "When can I trade other NFT Collections?",
      answer: "Soon! The current NFT Market is a basic version (phase 1), with early access to trading PancakeSwap NFTs only. Other collections will be coming soon. We’ll make an announcement soon about the launch of the V2 Market.",
      showAnswer: false
    },
    {
      question: "How can I list my NFT collection on the Market?",
      answer: "In Phase 2 of the NFT Marketplace, collections must be whitelisted before they may be listed. We are now accepting applications from NFT collection owners seeking to list their collections.",
      showAnswer: false
    },
    {
      question: "What are the fees?",
      answer: "100% of all platform fees taken by PancakeSwap from sales are used to buy back and BURN CAKE tokens in our weekly CAKE burns. Platform fees: 2% is subtracted from NFT sales on the market. Subject to change.Collection fees: Additional fees may be taken by collection creators, once those collections are live. These will not contribute to the CAKE burns.",
      showAnswer: false
    }
  ]

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Overview');
  }

}
