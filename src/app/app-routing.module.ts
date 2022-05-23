import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'info',
    loadChildren: () => import('./modules/info/info.module').then(m => m.InfoModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: 'nfts',
    loadChildren: () => import('./modules/nfts/nfts.module').then(m => m.NftsModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./modules/leaderboard/leaderboard.module').then(m => m.LeaderboardModule)
  },
  {
    path: 'pools',
    loadChildren: () => import('./modules/trade/trade.module').then(m => m.TradeModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
