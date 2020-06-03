import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InitComponent} from "./init/init.component";
import {AddImageComponent} from "./add-image/add-image.component";
import {SigninComponent} from "./components/signin/signin.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ForgotPasswordComponent} from "./components/forgot-password/forgot-password.component";
import{VerifyEmailComponent} from "./components/verify-email/verify-email.component";
import {AuthGuard} from "./shared/guard/auth.guard";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const appRoutes: Routes = [
  //basic initial routes
  { path: 'home', component: InitComponent, data: {page: 'home'}, canActivate: [AuthGuard]},
  //path is the name of the page, component where it is located in the code
  { path: 'add_image', component: AddImageComponent, data: {page: 'add_image'}, canActivate:[AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: SigninComponent },
  //{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register-user', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'dashboard', redirectTo: '/home'},
  { path: 'sign-up', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
