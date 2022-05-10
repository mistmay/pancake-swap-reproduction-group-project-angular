import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftsTopComponent } from './views/nfts-top.component';

const routes: Routes = [
    {
        path: '',
        component: NftsTopComponent,
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
export class NftsRoutingModule { }