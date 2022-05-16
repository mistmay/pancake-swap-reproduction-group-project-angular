import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionBtnComponent } from './components/accordion-btn/accordion-btn.component';
import { ButtonArrowComponent } from './components/button-arrow/button-arrow.component';
import { DarkModeBtnMoonComponent } from './components/dark-mode-btn-moon/dark-mode-btn-moon.component';
import { DarkModeBtnSunComponent } from './components/dark-mode-btn-sun/dark-mode-btn-sun.component';
import { DarkModeButtonComponent } from './components/dark-mode-button/dark-mode-button.component';
import { FaqComponent } from './components/faq/faq.component';
import { LiquidityCardComponent } from './components/liquidity-card/liquidity-card.component';
import { StandardButtonComponent } from './components/standard-button/standard-button.component';
import { ToogleBtnComponent } from './components/toogle-btn/toogle-btn.component';
import { HeroNavComponent } from './components/hero-nav/hero-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        AccordionBtnComponent,
        ButtonArrowComponent,
        DarkModeBtnMoonComponent,
        DarkModeBtnSunComponent,
        DarkModeButtonComponent,
        FaqComponent,
        LiquidityCardComponent,
        StandardButtonComponent,
        ToogleBtnComponent,
        HeroNavComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AccordionBtnComponent,
        ButtonArrowComponent,
        DarkModeBtnMoonComponent,
        DarkModeBtnSunComponent,
        DarkModeButtonComponent,
        FaqComponent,
        LiquidityCardComponent,
        StandardButtonComponent,
        ToogleBtnComponent,
        HeroNavComponent
    ]
})
export class SharedModule { }