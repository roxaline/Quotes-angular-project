import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoxyComponent } from './roxy/roxy.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { StrikehroughDirective } from './strikehrough.directive';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RoxyComponent,
    DetailsComponent,
    FormComponent,
    StrikehroughDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
