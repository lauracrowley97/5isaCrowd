import { Injectable } from '@angular/core';

import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/firestore";
import * as firebase from "firebase";
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';
//import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesToBeVerifiedService {
  imagesTBVRef: AngularFirestoreCollection<Image>;
  constructor(private firestore: AngularFirestore) { }


  writeImageData(imageId, name, imageUrl, lng, lat){
    firebase.database().ref('imagesToBeVerified/' + imageId).set({
      imageName: name,
      longitude: lng,
      latitude: lat,
      imageUrl: imageUrl
    })
  }
  getImageUrl(){
    this.imagesTBVRef = this.firestore.collection('images');
    //this.imagesTBVRef = this.firestore.collection('ImagesToBeVerified');
    return this.imagesTBVRef.valueChanges();
  }

  //TODO: implement the select and update for the images
  

}
