import { NgModule } from '@angular/core';
import { NftArrivalCardComponent } from './components/nft-arrival-card/nft-arrival-card.component';
import { NftsRoutingModule } from './nfts-routing.module';
import { NftOverviewComponent } from './views/nft-overview/nft-overview.component';
import { NftsTopComponent } from './views/nfts-top.component';

@NgModule({
    declarations: [
        NftsTopComponent,
        NftArrivalCardComponent,
        NftOverviewComponent
    ],
    imports: [
        NftsRoutingModule
    ],
    exports: [
        NftsTopComponent
    ]
})
export class NftsModule { }