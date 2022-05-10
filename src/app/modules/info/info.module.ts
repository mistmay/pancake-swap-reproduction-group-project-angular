import { NgModule } from '@angular/core';
import { InfoGraphComponent } from './components/info-graph/info-graph.component';
import { InfoTableComponent } from './components/info-table/info-table.component';
import { InfoTopMoversComponent } from './components/info-top-movers/info-top-movers.component';
import { SearchModalComponent } from './components/search-modal/search-modal.component';
import { SearchNavbarComponent } from './components/search-navbar/search-navbar.component';
import { InfoSearchPipe } from './pipes/info-search.pipe';
import { MathCeilPipe } from './pipes/math-ceil.pipe';
import { TablePaginatorFilterPipe } from './pipes/table-paginator-filter.pipe';
import { InfoPageComponent } from './views/info-page/info-page.component';
import { InfoPoolsComponent } from './views/info-pools/info-pools.component';
import { InfoTokenDetailsComponent } from './views/info-token-details/info-token-details.component';
import { InfoTokensComponent } from './views/info-tokens/info-tokens.component';
import { NgChartsModule } from 'ng2-charts';
import { InfoRoutingModule } from './info-routing.module';
import { InfoTopComponent } from './views/info-top.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        InfoGraphComponent,
        InfoTableComponent,
        InfoTopMoversComponent,
        SearchModalComponent,
        SearchNavbarComponent,
        InfoSearchPipe,
        MathCeilPipe,
        TablePaginatorFilterPipe,
        InfoPageComponent,
        InfoPoolsComponent,
        InfoTokensComponent,
        InfoTokenDetailsComponent,
        InfoTopComponent
    ],
    imports: [
        InfoRoutingModule,
        NgChartsModule,
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        InfoTopComponent
    ]
})
export class InfoModule { }