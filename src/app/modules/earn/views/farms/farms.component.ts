import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { FarmsService } from 'src/app/api/farms.service';
import { Farms } from 'src/app/models/farms';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.scss']
})

export class FarmsComponent implements OnInit, OnDestroy {
  
  subscription!: Subscription
  farms!: Farms[]
  sortedfarms!: Farms[]
  CardView: Boolean = false
  stakedOnly: Boolean = false
  finished: Boolean = false
  sortBy: string = 'Hot'
  searchedKey: string = ""
  currentIndex: number = 0
  scrollPageNumber!: number
  pageIndex: boolean[] = []
  scrollPos: number = 0
  breakPointArrayRow: number[] = []
  breakPointArrayCard: number[] = []
  currentBreakPointRow: number = 0
  currentBreakPointCard: number = 0

  constructor(private api: FarmsService, private titleService: TitleService) { }


  ngOnInit(): void {
    this.titleService.setTitle('Farms');
    this.api.getData()
    this.subscription = this.api.getObservable().subscribe((res: Farms[]) => {
      this.farms = res
      this.scrollPageNumber = Math.ceil(this.farms.length / 12)
      let BREAKPOINTFARM: number = 800
      let BREAKPOINTCARD: number = 1540
      for(let t: number = 0; t < this.scrollPageNumber; t++) {
        this.pageIndex.push(false)
        this.breakPointArrayRow.push(BREAKPOINTFARM)
        this.breakPointArrayCard.push(BREAKPOINTCARD)
        BREAKPOINTFARM += 1000
        BREAKPOINTCARD += 1600
        
      }
      this.pageIndex[0] = true
      this.breakPointArrayRow.pop()
      this.breakPointArrayCard.pop()
    })

  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  @HostListener('window:scroll', ['$event'])
  checkScrollPosition(): void {
    if(!this.CardView)
    {
      if(this.breakPointArrayRow[this.currentBreakPointRow]) {
      const currentScrollPos: number = window.pageYOffset;
      if(currentScrollPos >= this.breakPointArrayRow[this.currentBreakPointRow]) {
        this.currentIndex++
        this.pageIndex[this.currentIndex] = true
        this.currentBreakPointRow++
      } 
    }
  } else {
    if(this.breakPointArrayCard[this.currentBreakPointCard]) {
      const currentScrollPos: number = window.pageYOffset;
      if(currentScrollPos >= this.breakPointArrayCard[this.currentBreakPointCard]) {
        this.currentIndex++
        this.pageIndex[this.currentIndex] = true
        this.currentBreakPointCard++
      } 
    }
  }

  }

}
