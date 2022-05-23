import { NgModule } from '@angular/core';
import { PoolsComponent } from './views/pools/pools.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { TradeRoutingModule } from './trade-routing.module';
import { FarmsComponent } from './views/farms/farms.component';

@NgModule({
    declarations: [
        PoolsComponent,
        FarmsComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        TradeRoutingModule
    ],
    exports: [

    ]
})
export class TradeModule { }