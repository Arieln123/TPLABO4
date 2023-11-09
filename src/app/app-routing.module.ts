import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorComponent} from './shared/error/error.component';
import { HomeComponent } from './components/home/home/home.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ParkingComponent } from './components/home/parking/parking.component';

const routes: Routes = [
  {
    path:'landing',
    component: LandingComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },{
    path:'parking',
    component: ParkingComponent
  },
  {
  path:"contact",
  component: ContactFormComponent
  },
  {
    path: '',
    redirectTo:'landing',
    pathMatch: 'full'
  },
  {
    path:'**',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
