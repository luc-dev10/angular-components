import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypoModule } from './typo/typo.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TypoModule, ServicesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
