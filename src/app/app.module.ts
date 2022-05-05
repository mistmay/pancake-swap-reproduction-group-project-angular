import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { FooterMobileComponent } from './core/footer-mobile/footer-mobile.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { HeroComponent } from './views/homepage/components/hero/hero.component';
import { PhishingBarComponent } from './core/navbar/components/phishing-bar/phishing-bar.component';
import { NavbarProperComponent } from './core/navbar/components/navbar-proper/navbar-proper.component';
import { DarkModeButtonComponent } from './shared/dark-mode-button/dark-mode-button.component';
import { DarkModeBtnSunComponent } from './shared/dark-mode-button/components/dark-mode-btn-sun/dark-mode-btn-sun.component';
import { DarkModeBtnMoonComponent } from './shared/dark-mode-button/components/dark-mode-btn-moon/dark-mode-btn-moon.component';
import { ToogleBtnComponent } from './shared/toogle-btn/toogle-btn.component';
import { NavModalsComponent } from './core/nav-modals/nav-modals.component';
import { SettingScreenContentConnectWalletComponent } from './core/nav-modals/components/setting-screen-content-connect-wallet/setting-screen-content-connect-wallet.component';
import { SettingScreenContentSettingMenuComponent } from './core/nav-modals/components/setting-screen-content-setting-menu/setting-screen-content-setting-menu.component';
import { CakeMakesComponent } from './views/homepage/components/cake-makes/cake-makes.component';
import { EarnPassiveComponent } from './views/homepage/components/earn-passive/earn-passive.component';
import { StartInSecondsComponent } from './views/homepage/components/start-in-seconds/start-in-seconds.component';
import { TradeAnythingComponent } from './views/homepage/components/trade-anything/trade-anything.component';
import { UsedByComponent } from './views/homepage/components/used-by/used-by.component';
import { WinMillionsComponent } from './views/homepage/components/win-millions/win-millions.component';
import { UsedByCardComponent } from './views/homepage/components/used-by/used-by-card/used-by-card.component';
import { EarnPassiveFarmComponent } from './views/homepage/components/earn-passive/components/earn-passive-farm/earn-passive-farm.component';
import { EarnPassivePoolsComponent } from './views/homepage/components/earn-passive/components/earn-passive-pools/earn-passive-pools.component';
import { StandardButtonComponent } from './shared/standard-button/standard-button.component';
import { LiquidityCardComponent } from './shared/liquidity-card/liquidity-card.component';
import { NftOverviewComponent } from './views/nft-overview/nft-overview.component';
import { NftCardCollectionComponent } from './shared/nft-card-collection/nft-card-collection.component';
import { NftArrivalCardComponent } from './views/nft-overview/components/nft-arrival-card/nft-arrival-card.component';
import { FaqComponent } from './shared/faq/faq.component';
import { AccordionBtnComponent } from './shared/accordion-btn/accordion-btn.component';
import { HttpClientModule } from '@angular/common/http';
import { CakeGridComponent } from './views/homepage/components/cake-makes/cake-grid/cake-grid.component';
import { WinBackgroundComponent } from './views/homepage/components/win-millions/win-background/win-background.component';
import { WinCardLeftComponent } from './views/homepage/components/win-millions/win-card-left/win-card-left.component';
import { WinCardRightComponent } from './views/homepage/components/win-millions/win-card-right/win-card-right.component';
import { ButtonArrowComponent } from './shared/button-arrow/button-arrow.component';
import { WinBackgroundLeftComponent } from './views/homepage/components/win-millions/win-background/win-background-left/win-background-left.component';
import { WinBackgroundRightComponent } from './views/homepage/components/win-millions/win-background/win-background-right/win-background-right.component';
import { TopsFarmsPoolsComponent } from './views/homepage/components/earn-passive/components/tops-farms-pools/tops-farms-pools.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FooterMobileComponent,
    HomepageComponent,
    HeroComponent,
    PhishingBarComponent,
    NavbarProperComponent,
    DarkModeButtonComponent,
    DarkModeBtnSunComponent,
    DarkModeBtnMoonComponent,
    ToogleBtnComponent,
    NavModalsComponent,
    SettingScreenContentConnectWalletComponent,
    SettingScreenContentSettingMenuComponent,
    CakeMakesComponent,
    EarnPassiveComponent,
    StartInSecondsComponent,
    TradeAnythingComponent,
    UsedByComponent,
    WinMillionsComponent,
    EarnPassiveFarmComponent,
    EarnPassivePoolsComponent,
    UsedByCardComponent,
    StandardButtonComponent,
    LiquidityCardComponent,
    NftOverviewComponent,
    NftCardCollectionComponent,
    NftArrivalCardComponent,
    FaqComponent,
    AccordionBtnComponent,
    CakeGridComponent,
    WinBackgroundComponent,
    WinCardLeftComponent,
    WinCardRightComponent,
    ButtonArrowComponent,
    WinBackgroundLeftComponent,
    WinBackgroundRightComponent,
    TopsFarmsPoolsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
