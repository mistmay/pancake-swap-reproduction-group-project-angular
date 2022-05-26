import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-nfts-collections',
  templateUrl: './nfts-collections.component.html',
  styleUrls: ['./nfts-collections.component.scss']
})
export class NftsCollectionsComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('Collections');
  }

}
