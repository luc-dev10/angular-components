import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingHomeComponent } from './pricing-home/pricing-home.component';

const routes: Routes = [
  {
    path: 'pricing',
    component: PricingHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricingRoutingModule {}
