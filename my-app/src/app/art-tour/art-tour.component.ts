import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-art-tour',
  templateUrl: './art-tour.component.html',
  styleUrls: ['./art-tour.component.css']
})
export class ArtTourComponent implements OnInit {
  private name: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['art_tour'];
    });
  }

}
