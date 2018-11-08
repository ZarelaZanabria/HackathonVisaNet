import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculateLoanComponent } from './components/calculate-loan/calculate-loan.component';
import { LoanReceiverBankComponent} from './components/loan-receiver-bank/loan-receiver-bank.component';
import { MyNavComponent } from './components/my-nav/my-nav.component';
import { RegistrationUserComponent } from './components/registration-user/registration-user.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';



@NgModule({
  declarations: [
    AppComponent,
    CalculateLoanComponent,
    LoanReceiverBankComponent,
    MyNavComponent,
    RegistrationUserComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
