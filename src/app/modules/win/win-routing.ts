import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './views/competition/competition.component';
import { LotteryComponent } from './views/lottery/lottery.component';
import { WinTopComponent } from './views/win-top.component';

const routes: Routes = [
    {
        path: '',
        component: WinTopComponent,
        children: [
            { path: 'competition', component: CompetitionComponent },
            { path: 'lottery', component: LotteryComponent },
            { path: '', redirectTo: 'competition' }
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
export class WinRoutingModule { }