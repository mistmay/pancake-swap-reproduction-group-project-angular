import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradeTopComponent } from './views/trade-top.component';

const routes: Routes = [
    {
        path: '',
        component: TradeTopComponent,
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
export class TradeRoutingModule { }