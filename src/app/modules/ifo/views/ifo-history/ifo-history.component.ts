import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';
import { Ifo } from '../../models/ifo';

@Component({
  selector: 'app-ifo-history',
  templateUrl: './ifo-history.component.html',
  styleUrls: ['./ifo-history.component.scss']
})
export class IfoHistoryComponent implements OnInit {
  ifosArray: Ifo[] = [
    {
      img: 'https://pancakeswap.finance/images/ifos/belt-bg.svg',
      name: 'Belt'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/berry-bg.svg',
      name: 'Berry'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/blink-bg.svg',
      name: 'Blink'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/dar-bg.svg',
      name: 'Dar'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/ditto-bg.svg',
      name: 'Ditto'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/dkt-bg.png',
      name: 'Dkt'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/dpt-bg.png',
      name: 'Dpt'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/duet-bg.png',
      name: 'Duet'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/era-bg.png',
      name: 'Era'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/froyo-bg.png',
      name: 'Froyo'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/helmet-bg.svg',
      name: 'Helmet'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/horizon-bg.svg',
      name: 'Horizon'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/hotcross-bg.svg',
      name: 'Hotcross'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/kalmar-bg.svg',
      name: 'Kalmar'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/porto-bg.png',
      name: 'Porto'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/santos-bg.svg',
      name: 'Santos'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/soteria-bg.svg',
      name: 'Soteria'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/tenet-bg.svg',
      name: 'Tenet'
    }, {
      img: 'https://pancakeswap.finance/images/ifos/watch-bg.svg',
      name: 'Watch'
    }
  ];

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Initial Farm Offering');
  }

}
