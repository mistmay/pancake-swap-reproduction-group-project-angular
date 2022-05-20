import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { FooterMobileComponent } from './core/footer-mobile/footer-mobile.component';
import { PhishingBarComponent } from './core/navbar/components/phishing-bar/phishing-bar.component';
import { NavbarProperComponent } from './core/navbar/components/navbar-proper/navbar-proper.component';
import { NavModalsComponent } from './core/nav-modals/nav-modals.component';
import { SettingScreenContentConnectWalletComponent } from './core/nav-modals/components/setting-screen-content-connect-wallet/setting-screen-content-connect-wallet.component';
import { SettingScreenContentSettingMenuComponent } from './core/nav-modals/components/setting-screen-content-setting-menu/setting-screen-content-setting-menu.component';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FooterMobileComponent,
    PhishingBarComponent,
    NavbarProperComponent,
    NavModalsComponent,
    SettingScreenContentConnectWalletComponent,
    SettingScreenContentSettingMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
