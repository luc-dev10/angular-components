import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesHomeComponent } from './services-home/services-home.component';

@NgModule({
  declarations: [ServicesHomeComponent],
  imports: [CommonModule, ServicesRoutingModule],
  exports: [ServicesHomeComponent],
})
export class ServicesModule {}
