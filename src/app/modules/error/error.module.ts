import { NgModule } from '@angular/core';
import { ErrorTopComponent } from './views/error-top.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { ErrorRoutingModule } from './error-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        ErrorPageComponent,
        ErrorTopComponent
    ],
    imports: [
        ErrorRoutingModule,
        SharedModule
    ],
    exports: [
        ErrorTopComponent
    ]
})
export class ErrorModule { }