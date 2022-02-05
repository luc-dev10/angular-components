import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypoRoutingModule } from './typo-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, TypoRoutingModule],
  exports: [HomeComponent],
})
export class TypoModule {}
