import { Component, OnInit} from '@angular/core';
import {ImagesToBeVerifiedService} from "../services/images-to-be-verified.service";
import { Observable } from 'rxjs';
import { Image } from '../models/image.model';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-verify-image',
  templateUrl: './verify-image.component.html',
  styleUrls: ['./verify-image.component.css']
})
export class VerifyImageComponent implements OnInit {
  imagesTBV$: Observable<Image[]>;
  constructor(private fb: ImagesToBeVerifiedService, private http:HttpClient, private cookieService: CookieService) { }
  ipAddress:string;
  private cookieValue: string;
  private imageArr : Image[];
  public urlArr: String[];
  public index: number;
  public flag: boolean;
  ngOnInit(): void {
    this.flag = false;
    this.index = 0;
    //this.imagesTBV$ = 
    //this.urlArr = ["https://firebasestorage.googleapis.com/v0/b/fiveisacrowd-a051f.appspot.com/o/ImagesToBeVerified%2F1591267017496?alt=media&token=296dc5dd-4f76-47ca-a60c-d2c3ba4f3b9c"];
    this.urlArr = this.fb.getImageUrl();//
    //this.fb.getImageUrl().subscribe(val => console.log(val));//this.imageArr = val);
    console.log(this.urlArr);
    this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ipAddress = res.ip;
      console.log(this.ipAddress);
    });
    this.cookieValue = this.cookieService.get('5isACrowd');
    if(!this.cookieValue){
      this.cookieService.set('5isACrowd', Math.floor(Math.random() * 1000000).toString());
    }
    this.cookieValue = this.cookieService.get('5isACrowd');
    console.log(this.cookieValue);
  }
  OnSubmit(s): void{
    console.log(s);
    this.index += Math.floor(Math.random() * Math.floor(49));;
    if(this.index > 49) {
      this.index -= 49;
    }
    //this.imagesTBV$ = this.fb.getImageUrl();
    switch(s) {
      case "a": {
        break;
      }
      case "v": {
        break;
      }
      case "n": {
        break;
      }
      case "x": {
        this.flag = true;
        break;
      }
      default: {
        console.log("Not Possible")
      }
    }
  }

  UpdateRecord(x): void{

  }
  DeleteAndMoveRecord(x): void{
    /*var jobskill_query = db.collection('job_skills').where('job_id','==',post.job_id);
    jobskill_query.get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        doc.ref.delete();
      });
    });*/
  }

}
