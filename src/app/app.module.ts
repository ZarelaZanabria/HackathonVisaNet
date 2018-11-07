import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculateLoanComponent } from './components/calculate-loan/calculate-loan.component';
import { MyNavComponent } from './components/my-nav/my-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculateLoanComponent,
    MyNavComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
