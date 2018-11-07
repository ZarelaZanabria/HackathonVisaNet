import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculateLoanComponent } from './components/calculate-loan/calculate-loan.component';
import { LoanReceiverBankComponent} from './components/loan-receiver-bank/loan-receiver-bank.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculateLoanComponent,
    LoanReceiverBankComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
