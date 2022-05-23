import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { IfoRoutingModule } from "./ifo-routing.module";
import { IfoTopComponent } from "./views/ifo-top.component";
import { IfoComponent } from './views/ifo/ifo.component';
import { IfoHistoryComponent } from './views/ifo-history/ifo-history.component';
import { IfoHeaderComponent } from './components/ifo-header/ifo-header.component';
import { CommonModule } from "@angular/common";
import { CardMobileComponent } from './components/card-mobile/card-mobile.component';
import { DuetProtocolCardComponent } from './components/duet-protocol-card/duet-protocol-card.component';
import { IfoHowToTakeComponent } from './components/ifo-how-to-take/ifo-how-to-take.component';

@NgModule({
    declarations: [
        IfoTopComponent,
        IfoComponent,
        IfoHistoryComponent,
        IfoHeaderComponent,
        CardMobileComponent,
        DuetProtocolCardComponent,
        IfoHowToTakeComponent
    ],
    imports: [
        IfoRoutingModule,
        SharedModule,
        CommonModule
    ],
    exports: [
        IfoTopComponent
    ]
})
export class IfoModule { }