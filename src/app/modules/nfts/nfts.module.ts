import { NgModule } from '@angular/core';
import { NftArrivalCardComponent } from './components/nft-arrival-card/nft-arrival-card.component';
import { NftsRoutingModule } from './nfts-routing.module';
import { NftOverviewComponent } from './views/nft-overview/nft-overview.component';
import { NftsTopComponent } from './views/nfts-top.component';
import { NftHeaderComponent } from './components/nft-header/nft-header.component';
import { NftSeparatorComponent } from './components/nft-separator/nft-separator.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        NftsTopComponent,
        NftArrivalCardComponent,
        NftOverviewComponent,
        NftHeaderComponent,
        NftSeparatorComponent,
    ],
    imports: [
        NftsRoutingModule,
        SharedModule
    ],
    exports: [
        NftsTopComponent
    ]
})
export class NftsModule { }