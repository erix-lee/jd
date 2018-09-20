import { Component, OnInit } from '@angular/core';
import { TimelineEvent } from 'ngx-timeline';

@Component({
  selector: 'app-chief-home',
  templateUrl: './chief-home.component.html',
  styleUrls: ['./chief-home.component.sass']
})
export class ChiefHomeComponent implements OnInit {

  constructor() { }

  events: Array<TimelineEvent>;

  ngOnInit() {
    this.events = new Array<TimelineEvent>();
    this.events.push({ "date": new Date(), "icon": "fa-bell", "header": "最新公告", "body": "ECharts是一款由百度前端技术部开发的，基于Javascript的数据可视化图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。" });
    this.events.push({ "date": new Date(), "icon": "fa-calendar", "header": "XXX考试已结束", "body": "点击查看成绩。" });
    this.events.push({ "date": new Date(), "icon": "fa-newspaper-o", "header": "课程章节3已发布", "body": "" });
  }
}
