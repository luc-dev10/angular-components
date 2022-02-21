import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewsHomeComponent } from './reviews-home/reviews-home.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [ReviewsHomeComponent, TableComponent, ModalComponent],
  imports: [CommonModule, ReviewsRoutingModule],
})
export class ReviewsModule {}
