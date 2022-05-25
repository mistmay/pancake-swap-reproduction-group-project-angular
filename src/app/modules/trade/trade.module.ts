import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TradeTopComponent } from './views/trade-top.component';
import { TradeRoutingModule } from './trade-routing.module';

@NgModule({
    declarations: [
        TradeTopComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TradeRoutingModule
    ],
    exports: [
        TradeTopComponent
    ]
})
export class TradeModule { }