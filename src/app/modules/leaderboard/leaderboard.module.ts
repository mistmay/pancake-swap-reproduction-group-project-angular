import { NgModule } from '@angular/core';
import { LeaderboardComponent } from './views/leaderboard/leaderboard.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { TeamsCardComponent } from './components/teams-card/teams-card.component';

@NgModule({
    declarations: [
        LeaderboardComponent,
        TeamsCardComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        LeaderboardRoutingModule,
    ],
    exports: [

    ]
})
export class LeaderboardModule { }