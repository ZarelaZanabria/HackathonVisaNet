import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistrationUserComponent } from './components/registration-user/registration-user.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationUserComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
