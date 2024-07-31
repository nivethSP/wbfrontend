import { Component, Input, OnInit } from '@angular/core';
import { surplusCourseList } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-surpluscorasedetail',
  templateUrl: './surpluscorasedetail.component.html',
  styleUrls: ['./surpluscorasedetail.component.css']
})
export class SurpluscorasedetailComponent implements OnInit {
  @Input() surplusCourseDetail?: surplusCourseList;
  surplusCourseIssues: any[] = [];
  constructor() { }

  ngOnInit(): void {
    if(this.surplusCourseDetail?.issues)
    this.surplusCourseIssues = JSON.parse(this.surplusCourseDetail?.issues)
  }

}
