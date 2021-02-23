import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import {
  AccordionComponent,
  CreditCardInputComponent,
  ProgressBarComponent,
  StarRatingsComponent
 } from './';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ComponentsComponent,
    AccordionComponent,
    CreditCardInputComponent,
    ProgressBarComponent,
    StarRatingsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ComponentsComponent }]),
  ],
})
export class ComponentsModule { }