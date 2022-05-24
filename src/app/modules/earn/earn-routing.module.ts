import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarnTopComponent } from './views/earn-top.component';
import { FarmsComponent } from './views/farms/farms.component';
import { PoolsComponent } from './views/pools/pools.component';

const routes: Routes = [
    {
        path: '',
        component: EarnTopComponent,
        children: [
            {
                path: 'pools',
                component: PoolsComponent
            },
            {
                path: 'farms',
                component: FarmsComponent
            },
            {
                path: '',
                redirectTo: "farms"
            }
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
export class EarnRoutingModule { }