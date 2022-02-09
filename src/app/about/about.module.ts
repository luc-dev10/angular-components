import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutHomeComponent } from './about-home/about-home.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  declarations: [AboutHomeComponent, BiographyComponent, CompaniesComponent, PartnersComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
