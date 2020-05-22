import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Imports used to create animations
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { InitComponent } from './init/init.component';

//Import to control the services
import {ContentService} from "./shared/services/content/content.service";
import {AppRoutingModule} from "./app-routing.module";
import { FullpageDirective } from './shared/directives/fullpage.directive';


@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    FullpageDirective //Our init page is available through all the module
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule //adds the routing module into the program
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }