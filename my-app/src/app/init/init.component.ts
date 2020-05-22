import { Component, OnInit } from '@angular/core';
import {ContentService} from "../shared/services/content/content.service";
import {ActivatedRoute} from "@angular/router";

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
  //page: Object
  constructor(private contentService: ContentService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    //read the page property of the current route and use that as a key to pull the corresponding
    // content from our server
    const pageData = this.route.snapshot.data['page'];
    //Select home page
    this.page = this.contentService.pages[pageData];
  }

}
