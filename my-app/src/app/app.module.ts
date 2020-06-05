import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AgmMap, MouseEvent, MapsAPILoader, AgmCoreModule} from '@agm/core';
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


import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFirestore} from "@angular/fire/firestore";
import { AddImageComponent } from './add-image/add-image.component';
import {FormsModule} from "@angular/forms";
import { VerifyImageComponent } from './verify-image/verify-image.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    FullpageDirective,
    AddImageComponent,
    VerifyImageComponent //Our init page is available through all the module
  ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        BrowserAnimationsModule,
        AppRoutingModule, //adds the routing module into the program
        HttpClientModule,
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyCHPkZEIPLC04uCnTpp6gmoD4BbcvgkR_0"
        }),
        FormsModule
    ],
  providers: [ContentService,
    { provide: AngularFireStorageModule, useValue: "your" }, AngularFirestore, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
