import { Component, OnInit } from '@angular/core';
import {ContentService} from "../shared/services/content/content.service";
import {ActivatedRoute} from "@angular/router";
import {finalize} from "rxjs/operators";
import { AngularFireStorage } from "@angular/fire/storage";
import {Observable} from "rxjs";

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  page = {
    title: 'Home',
    subtitle: 'Welcome Home!',
    content: 'Some home content.',
    image: 'assets/bg02.jpg'
  };
  constructor(private contentService: ContentService,
              private route: ActivatedRoute, private storage: AngularFireStorage) { }
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;

  ngOnInit(): void {

    //read the page property of the current route and use that as a key to pull the corresponding
    // content from our server
    const pageData = this.route.snapshot.data['page'];
    //Select home page
    this.page = this.contentService.pages[pageData];
  }

  onFileSelected(event) {
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

}
