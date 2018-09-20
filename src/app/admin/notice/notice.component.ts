import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.sass']
})
export class NoticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public content:String="公告内容";
  public options: Object = {
    charCounterCount: true,
    language: 'zh_cn',
    heightMin: 200,
      heightMax: 400,
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
    toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat','alert'],
  };
}
