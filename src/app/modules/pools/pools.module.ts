import { NgModule } from '@angular/core';
import { PoolsComponent } from './views/pools/pools.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PoolsRoutingModule } from './pools-routing.module';

@NgModule({
    declarations: [
        PoolsComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        PoolsRoutingModule
    ],
    exports: [

    ]
})
export class PoolsModule { }