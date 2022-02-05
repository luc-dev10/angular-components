import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PricingHomeComponent } from './pricing-home/pricing-home.component';

@NgModule({
  declarations: [PricingHomeComponent],
  imports: [CommonModule, PricingRoutingModule],
})
export class PricingModule {}
