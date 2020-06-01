import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InitComponent} from "./init/init.component";
import {AddImageComponent} from "./add-image/add-image.component";

const appRoutes: Routes = [
  //basic initial routes
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: InitComponent, data: {page: 'home'}},
  //path is the name of the page, component where it is located in the code
  {path: 'add_image', component: AddImageComponent, data: {page: 'add_image'}},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
