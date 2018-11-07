import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
