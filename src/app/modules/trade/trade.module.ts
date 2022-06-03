import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TradeTopComponent } from './views/trade-top.component';
import { TradeRoutingModule } from './trade-routing.module';
import { ExchangeComponent } from './views/exchange/exchange.component';
import { LiquidityComponent } from './views/liquidity/liquidity.component';
import { LimitComponent } from './views/limit/limit.component';
import { TradeCardComponent } from './components/trade-card/trade-card.component';
import { TabOrdersComponent } from './components/tab-orders/tab-orders.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TradeTopComponent,
        ExchangeComponent,
        LiquidityComponent,
        LimitComponent,
        TradeCardComponent,
        TabOrdersComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        TradeRoutingModule,
        FormsModule
    ],
    exports: [
        TradeTopComponent
    ]
})
export class TradeModule { }