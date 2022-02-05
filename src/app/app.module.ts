import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypoModule } from './typo/typo.module';
import { ServicesModule } from './services/services.module';
import { ReviewsModule } from './reviews/reviews.module';
import { PricingModule } from './pricing/pricing.module';
import { AboutModule } from './about/about.module';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypoModule,
    ServicesModule,
    ReviewsModule,
    PricingModule,
    AboutModule,
    NotFoundModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
