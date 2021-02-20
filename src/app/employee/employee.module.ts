import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { CardComponent } from './pages/card/card.component';

@NgModule({
  declarations: [HomeComponent, FormComponent, CardComponent],
  imports: [CommonModule, EmployeeRoutingModule],
})
export class EmployeeModule {}
