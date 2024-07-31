import { Component, Input, OnInit } from '@angular/core';
import { bundDetail } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-bund',
  templateUrl: './bund.component.html',
  styleUrls: ['./bund.component.css']
})
export class BundComponent implements OnInit {
  @Input() bundDetail?: bundDetail;
  bundIssues: any[] = [];
  bundFunctionalities: any[] = [];
  stonepitchingConditions: any[] = []
  constructor() { }

  ngOnInit(): void {
    console.log(this.bundDetail?.accessGhatsConditionList);
    if(this.bundDetail?.issuesInBund)
     this.bundIssues = JSON.parse(this.bundDetail?.issuesInBund)
    if(this.bundDetail?.bundFunctionalities)
      this.bundFunctionalities = JSON.parse(this.bundDetail?.bundFunctionalities)
    if(this.bundDetail?.stonePitching)
     this.stonepitchingConditions = JSON.parse(this.bundDetail?.stonePitching)
  }

}
