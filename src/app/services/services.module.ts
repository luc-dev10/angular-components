import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesHomeComponent } from './services-home/services-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ServicesHomeComponent],
  imports: [CommonModule, ServicesRoutingModule, SharedModule],
})
export class ServicesModule {}
