import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypoHomeComponent } from './typo-home/typo-home.component';

const routes: Routes = [
  {
    path: 'home',
    component: TypoHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypoRoutingModule {}
