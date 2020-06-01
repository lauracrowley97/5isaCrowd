import {Component, OnInit, ViewChild} from '@angular/core';
import {ContentService} from "../shared/services/content/content.service";
import {ActivatedRoute} from "@angular/router";
import {AngularFireStorage} from "@angular/fire/storage";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";
import {AgmMap, MapsAPILoader, MouseEvent} from "@agm/core";
import {ImagesToBeVerifiedService} from "../services/images-to-be-verified.service";

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})

export class AddImageComponent implements OnInit {
  private downloadURL: Observable<any>;
  constructor(private contentService: ContentService, private apiloader: MapsAPILoader,
              private route: ActivatedRoute, private storage: AngularFireStorage,
              private fb: ImagesToBeVerifiedService) { }

  selectedFile: File = null;


  @ViewChild(AgmMap,{static: true}) public agmMap: AgmMap;
  zoom
  getAddress
  longitude
  latitude
  currentLocation: string;
  imageName: string;

  ngOnInit(): void {
    this.get()
    this.agmMap.triggerResize(true) ;
    this.zoom = 16;
  }

  onFileChanged(event){
    this.selectedFile = event.target.files[0]; //file will contain the file of the system
  }

  onSubmit() {
    const n = Date.now();
    const filePath = `ImagesToBeVerified/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`ImagesToBeVerified/${n}`, this.selectedFile);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb.writeImageData(n, this.imageName, url, this.longitude, this.latitude);
            }
            console.log(this.downloadURL);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }


  //Used to update the values when the longitude and the latitude changes
  OnCoordinateChange(event){
    let lat:number = event.target.valueAsNumber;

    if (lat >= -180 && lat <= 180){
      this.latitude = lat;
    }
    else{
      if (lat > 180){
        console.log("upper range/warning errors have to be implemented");
        this.latitude = 180;
      }
      else{
        console.log("lower range");
        this.latitude = -180;
      }
    }
  }

  OnNameChanged(event){
    this.imageName = event.target.value;
  }


  get() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.getAddress = (this.latitude, this.longitude)
          this.updateApiLoader()
        }
      })
    }
  }

  mapClicked($event: MouseEvent) {
    //TODO: Ask for changing the components when changing the image
    this.latitude = $event.coords.lat,
    this.longitude = $event.coords.lng
    this.updateApiLoader()
  }

  updateApiLoader(){
    this.apiloader.load().then(() => {
      let geocoder = new google.maps.Geocoder;
      let latlng = {
        lat: this.latitude,
        lng: this.longitude
      };
      geocoder.geocode({
        'location': latlng
      }, function (results) {
        if (results[0]) {
          this.currentLocation = results[0].formatted_address;
          console.log(this.currentLocation);
        } else {
          console.log('Not found');
        }
      });
    });
  }
}
