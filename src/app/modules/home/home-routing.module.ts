import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTopComponent } from './views/home-top.component';
import { HomepageComponent } from './views/homepage/homepage.component';

const routes: Routes = [
    {
        path: '',
        component: HomeTopComponent,
        children: [
            { path: '', component: HomepageComponent }
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
export class HomeRoutingModule { }