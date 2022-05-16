import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftOverviewComponent } from './views/nft-overview/nft-overview.component';
import { NftsTopComponent } from './views/nfts-top.component';

const routes: Routes = [
    {
        path: '',
        component: NftsTopComponent,
        children: [
            { path: '', component: NftOverviewComponent }
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