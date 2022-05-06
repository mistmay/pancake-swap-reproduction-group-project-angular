import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';
import { InfoPageComponent } from './views/info-page/info-page.component';
import { InfoPoolsComponent } from './views/info-page/sub-pages/info-pools/info-pools.component';
import { InfoTokensComponent } from './views/info-page/sub-pages/info-tokens/info-tokens.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'info', component: InfoPageComponent },
  { path: 'info/pools', component: InfoPoolsComponent },
  { path: 'info/tokens', component: InfoTokensComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
