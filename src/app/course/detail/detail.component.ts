import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public content:String="资料内容";
  public options: Object = {
    charCounterCount: true,
    language: 'zh_cn',
    heightMin: 300,
    heightMax: 400,

  };
}
