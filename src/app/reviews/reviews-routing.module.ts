import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsHomeComponent } from './reviews-home/reviews-home.component';

const routes: Routes = [
  {
    path: 'reviews',
    component: ReviewsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewsRoutingModule {}
