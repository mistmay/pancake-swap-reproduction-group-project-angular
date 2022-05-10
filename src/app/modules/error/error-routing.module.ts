import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { ErrorTopComponent } from './views/error-top.component';

const routes: Routes = [
    {
        path: '',
        component: ErrorTopComponent,
        children: [
            { path: '', component: ErrorPageComponent }
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
export class ErrorRoutingModule { }