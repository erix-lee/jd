import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnInit {

  rows = [];
  rows2 = [];
  type: String;

  constructor(private routeInfo: ActivatedRoute) {
    this.type = this.routeInfo.snapshot.params['type'];

    this.fetch((data) => {
      this.rows = data.splice(0, 5);
    }, 'assets/data/items.json');
    this.fetch((data) => {
      this.rows2 = data.splice(0, 5);
    }, 'assets/data/report.json');
  }

  fetch(cb, url) {
    const req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }


  ngOnInit() {
    this.routeInfo.paramMap.subscribe((params: ParamMap) => {
      this.type = params.get('type')
    })

    console.log(this.type)
  }

}
