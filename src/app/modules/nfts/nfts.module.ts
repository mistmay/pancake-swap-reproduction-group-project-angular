import { NgModule } from '@angular/core';
import { NftArrivalCardComponent } from './components/nft-arrival-card/nft-arrival-card.component';
import { NftsRoutingModule } from './nfts-routing.module';
import { NftOverviewComponent } from './views/nft-overview/nft-overview.component';
import { NftsTopComponent } from './views/nfts-top.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NftSeparatorComponent } from './components/nft-separator/nft-separator.component';
import { NftCardCollectionComponent } from './components/nft-card-collection/nft-card-collection.component';
import { NftsCollectionsComponent } from './views/nfts-collections/nfts-collections.component';
import { SearchPipe } from './pipes/search.pipe';
import { PaginatorPipe } from './pipes/paginator.pipe';
import { MathCeilPipe } from './pipes/math-ceil.pipe';
import { NftsTableComponent } from './components/nfts-table/nfts-table.component';


@NgModule({
    declarations: [
        NftsTopComponent,
        NftArrivalCardComponent,
        NftOverviewComponent,
        NftSeparatorComponent,
        NftCardCollectionComponent,
        NftsCollectionsComponent,
        SearchPipe,
        PaginatorPipe,
        MathCeilPipe,
        NftsTableComponent
    ],
    imports: [
        NftsRoutingModule,
        SharedModule,
        CommonModule,
    ],
    exports: [
        NftsTopComponent
    ]
})
export class NftsModule { }