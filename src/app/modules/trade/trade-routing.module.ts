import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeComponent } from './views/exchange/exchange.component';
import { LiquidityComponent } from './views/liquidity/liquidity.component';
import { TradeTopComponent } from './views/trade-top.component';

const routes: Routes = [
    {
        path: '',
        component: TradeTopComponent,
        children: [
            { path: 'exchange', component: ExchangeComponent },
            { path: 'liquidity', component: LiquidityComponent },
            { path: '', redirectTo: 'exchange' }
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
export class TradeRoutingModule { }