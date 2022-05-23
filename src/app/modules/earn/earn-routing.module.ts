import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarnTopComponent } from './views/earn-top.component';
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
                path: '',
                redirectTo: "pools"
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