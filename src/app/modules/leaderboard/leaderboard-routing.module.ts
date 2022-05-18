import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './views/leaderboard/leaderboard.component';

const routes: Routes = [
    {
        path: '',
        component: LeaderboardComponent,
        children: [
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class LeaderboardRoutingModule { }