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
      imageUrl: imageUrl,
      Vote1IP: '',
      Vote1ID: '',
      Vote2IP: '',
      Vote2ID: '',
      Vote3IP: '',
      Vote3ID: '',
      Art: '0',
      Vandalism: '0',
      Neither: '0'
    })
  }
  getImageUrl(){
    var imageUrls: string[] = [];
    firebase.database().ref('imagesToBeVerified').on('value', function(snapshot){
      var data = snapshot.val();
      //console.log(typeof data);
      //console.log(data);
      for (const key of Object.keys(data)) {
        const value = data[key]
        //console.log(typeof value.imageUrl + ` ${value.imageUrl}`);
        imageUrls.push((<string> value.imageUrl));
     }
      //console.log(imageUrls);
    });
    return imageUrls;
    /*
    this.imagesTBVRef = this.firestore.collection('imagesToBeVerified');
    //this.imagesTBVRef = this.firestore.collection('ImagesToBeVerified');
    return this.imagesTBVRef.valueChanges();*/
  }

  //TODO: implement the select and update for the images


}
