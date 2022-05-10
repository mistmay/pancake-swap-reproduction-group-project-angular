import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CakeGridComponent } from './components/cake-grid/cake-grid.component';
import { CakeMakesComponent } from './components/cake-makes/cake-makes.component';
import { EarnPassiveFarmComponent } from './components/earn-passive-farm/earn-passive-farm.component';
import { EarnPassivePoolsComponent } from './components/earn-passive-pools/earn-passive-pools.component';
import { EarnPassiveComponent } from './components/earn-passive/earn-passive.component';
import { HeroComponent } from './components/hero/hero.component';
import { StartInSecondsComponent } from './components/start-in-seconds/start-in-seconds.component';
import { TopsFarmsPoolsComponent } from './components/tops-farms-pools/tops-farms-pools.component';
import { TradeAnythingComponent } from './components/trade-anything/trade-anything.component';
import { UsedByCardComponent } from './components/used-by-card/used-by-card.component';
import { UsedByComponent } from './components/used-by/used-by.component';
import { WinBackgroundLeftComponent } from './components/win-background-left/win-background-left.component';
import { WinBackgroundRightComponent } from './components/win-background-right/win-background-right.component';
import { WinBackgroundComponent } from './components/win-background/win-background.component';
import { WinCardLeftComponent } from './components/win-card-left/win-card-left.component';
import { WinCardRightComponent } from './components/win-card-right/win-card-right.component';
import { WinMillionsComponent } from './components/win-millions/win-millions.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeTopComponent } from './views/home-top.component';
import { HomepageComponent } from './views/homepage/homepage.component';

@NgModule({
    declarations: [
        CakeGridComponent,
        CakeMakesComponent,
        EarnPassiveComponent,
        EarnPassiveFarmComponent,
        EarnPassivePoolsComponent,
        HeroComponent,
        StartInSecondsComponent,
        TopsFarmsPoolsComponent,
        TradeAnythingComponent,
        UsedByCardComponent,
        UsedByComponent,
        WinBackgroundComponent,
        WinBackgroundLeftComponent,
        WinBackgroundRightComponent,
        WinCardLeftComponent,
        WinCardRightComponent,
        WinMillionsComponent,
        HomepageComponent,
        HomeTopComponent
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        SharedModule
    ],
    exports: [
        HomeTopComponent
    ]
})
export class HomeModule { }