import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrationUserComponent } from './componets/registration-user/registration-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationUserComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
