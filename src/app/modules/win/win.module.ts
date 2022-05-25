import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WinRoutingModule } from './win-routing';
import { WinTopComponent } from './views/win-top.component';
import { CompetitionComponent } from './views/competition/competition.component';
import { HeroCompetitionComponent } from './components/hero-competition/hero-competition.component';

@NgModule({
    declarations: [
        WinTopComponent,
        CompetitionComponent,
        HeroCompetitionComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        WinRoutingModule
    ],
    exports: [
        WinTopComponent
    ]
})
export class WinModule { }