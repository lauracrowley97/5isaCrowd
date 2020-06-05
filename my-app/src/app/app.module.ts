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
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import {AuthService} from "./shared/services/auth.service";
import {ChatModule} from "./chat/chat.module";

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    FullpageDirective,
    AddImageComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent //Our init page is available through all the module
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
        AgmCoreModule.forRoot({
            apiKey: "AIzaSyCHPkZEIPLC04uCnTpp6gmoD4BbcvgkR_0"
        }),
        FormsModule,
        ChatModule
    ],
  providers: [ContentService, AuthService,
    { provide: AngularFireStorageModule, useValue: "your" }, AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
