import { Component, OnInit } from '@angular/core';
import { TimelineEvent } from 'ngx-timeline';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.sass']
})
export class StudentHomeComponent implements OnInit {

  constructor() { }

  events: Array<TimelineEvent>;

  ngOnInit() {
    this.events = new Array<TimelineEvent>();
    this.events.push({ "date": new Date(), "header": "最新公告", "body": "ECharts是一款由百度前端技术部开发的，基于Javascript的数据可视化图表库，提供直观，生动，可交互，可个性化定制的数据可视化图表。", "icon": "fa-github" });
    this.events.push({ "date": new Date(), "header": "xxx考试", "body": "可在23小时12分后领取。" });
    this.events.push({ "date": new Date(), "header": "xxx考试结果公布", "body": "83分，继续努力，点击查看详情" });
  }

}
