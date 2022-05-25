import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinTopComponent } from './views/win-top.component';

const routes: Routes = [
    {
        path: '',
        component: WinTopComponent,
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
export class WinRoutingModule { }