import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TradeTopComponent } from './views/trade-top.component';
import { TradeRoutingModule } from './trade-routing.module';
import { ExchangeComponent } from './views/exchange/exchange.component';
import { LiquidityComponent } from './views/liquidity/liquidity.component';
import { LimitComponent } from './views/limit/limit.component';

@NgModule({
    declarations: [
        TradeTopComponent,
        ExchangeComponent,
        LiquidityComponent,
        LimitComponent
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