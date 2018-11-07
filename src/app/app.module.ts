import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculateLoanComponent } from './components/calculate-loan/calculate-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculateLoanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
