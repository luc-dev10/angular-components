import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypoRoutingModule } from './typo-routing.module';
import { TypoHomeComponent } from './typo-home/typo-home.component';

@NgModule({
  imports: [CommonModule, TypoRoutingModule],
  declarations: [TypoHomeComponent],
  exports: [TypoHomeComponent],
})
export class TypoModule {}
