import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculateLoanComponent } from './components/calculate-loan/calculate-loan.component';
import { MyNavComponent } from './components/container-sections/my-nav/my-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { StepsComponent } from './components/loan/steps/steps.component';
import { LoanComponent } from './components/loan/loan.component';
import { ContainerSectionsComponent } from './components/container-sections/container-sections.component';
import { LoanReceiverBankComponent} from './components/loan-receiver-bank/loan-receiver-bank.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculateLoanComponent,
    MyNavComponent,
    HomeComponent,
    StepsComponent,
    LoanComponent,
    ContainerSectionsComponent,
    LoanReceiverBankComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
