import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoTokenDetailsComponent } from "./views/info-token-details/info-token-details.component";
import { InfoTokensComponent } from "./views/info-tokens/info-tokens.component";
import { InfoPoolsComponent } from "./views/info-pools/info-pools.component";
import { InfoPageComponent } from "./views/info-page/info-page.component";
import { InfoTopComponent } from "./views/info-top.component";

const routes: Routes = [
    {
        path: '',
        component: InfoTopComponent,
        children: [
            { path: 'token/:id', component: InfoTokenDetailsComponent },
            { path: 'tokens', component: InfoTokensComponent },
            { path: 'pools', component: InfoPoolsComponent },
            { path: '', component: InfoPageComponent }
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
export class InfoRoutingModule { }