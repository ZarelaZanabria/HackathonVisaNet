import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
// import { MyNavComponent } from './components/my-nav/my-nav.component';
import { ContainerSectionsComponent } from './components/container-sections/container-sections.component';
import { RegistrationUserComponent } from './components/registration-user/registration-user.component';
// import { StepsComponent } from './components/loan/steps/steps.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'container', component: ContainerSectionsComponent },
  /* { path: 'step2', component: RegistrationUserComponent} */
  // { path: 'container/stepOne', component: StepsComponent }
 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
