import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import {
  AccordionComponent,
  AccordionItemComponent,
  CreditCardInputComponent,
  DebounceSearchComponent,
  LinkedinPostComponent,
  ModalComponent,
  ProgressBarComponent,
  QuoteComponent,
  RichTextViewerComponent,
  SearchListComponent,
  StarRatingsComponent,
  ToggleComponent,
  TwitterPostComponent,
 } from './';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ComponentsComponent,
    AccordionComponent,
    AccordionItemComponent,
    CreditCardInputComponent,
    DebounceSearchComponent,
    LinkedinPostComponent,
    ModalComponent,
    ProgressBarComponent,
    QuoteComponent,
    RichTextViewerComponent,
    SearchListComponent,
    StarRatingsComponent,
    ToggleComponent,
    TwitterPostComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: ComponentsComponent }]),
  ],
})
export class ComponentsModule { }
