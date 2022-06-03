import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NftOverviewComponent } from './views/nft-overview/nft-overview.component';
import { NftsCollectionsComponent } from './views/nfts-collections/nfts-collections.component';
import { NftsDetailsComponent } from './views/nfts-details/nfts-details.component';
import { NftsTopComponent } from './views/nfts-top.component';

const routes: Routes = [
    {
        path: '',
        component: NftsTopComponent,
        children: [
            { path: 'overview', component: NftOverviewComponent },
            { path: 'collections/:collection_address', component: NftsDetailsComponent },
            { path: 'collections', component: NftsCollectionsComponent },
            { path: '', redirectTo: 'overview' }
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