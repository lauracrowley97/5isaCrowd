import { Injectable } from '@angular/core';

import {AngularFirestore} from "@angular/fire/firestore";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class ImagesToBeVerifiedService {

  constructor(private firestore: AngularFirestore) { }


  writeImageData(imageId, name, imageUrl, lng, lat){
    firebase.database().ref('imagesToBeVerified/' + imageId).set({
      imageName: name,
      longitude: lng,
      latitude: lat,
      imageUrl: imageUrl
    })
  }

  //TODO: implement the select and update for the images
  

}
