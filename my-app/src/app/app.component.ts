import { Component } from '@angular/core';
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { ContentService } from "./shared/services/content/content.service";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}

