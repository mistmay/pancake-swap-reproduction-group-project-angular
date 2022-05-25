import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WinRoutingModule } from './win-routing';
import { WinTopComponent } from './views/win-top.component';

@NgModule({
    declarations: [
        WinTopComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        WinRoutingModule
    ],
    exports: [
        WinTopComponent
    ]
})
export class WinModule { }