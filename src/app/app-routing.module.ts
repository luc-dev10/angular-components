import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypoHomeComponent } from './typo-home/typo-home.component';
import { NotFoundHomeComponent } from './not-found-home/not-found-home.component';

const routes: Routes = [
  { path: '', component: TypoHomeComponent },
  {
    path: 'services',
    loadChildren: () =>
      import('./services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'reviews',
    loadChildren: () =>
      import('./reviews/reviews.module').then((m) => m.ReviewsModule),
  },
  {
    path: 'pricing',
    loadChildren: () =>
      import('./pricing/pricing.module').then((m) => m.PricingModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  { path: '**', component: NotFoundHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
