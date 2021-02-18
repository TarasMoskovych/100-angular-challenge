import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  AccordionComponent,
  CardComponent,
  ProgressBarComponent,
  StarRatingsComponent,
  ToolbarComponent,
  TopOfPageComponent,
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    CardComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    ToolbarComponent,
    TopOfPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
