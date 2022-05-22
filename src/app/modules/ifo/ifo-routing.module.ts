import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IfoHistoryComponent } from './views/ifo-history/ifo-history.component';
import { IfoTopComponent } from './views/ifo-top.component';
import { IfoComponent } from './views/ifo/ifo.component';

const routes: Routes = [
    {
        path: '',
        component: IfoTopComponent,
        children: [
            { path: 'ifo', component: IfoComponent },
            { path: 'history', component: IfoHistoryComponent },
            { path: '', redirectTo: 'ifo' }
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
export class IfoRoutingModule { }