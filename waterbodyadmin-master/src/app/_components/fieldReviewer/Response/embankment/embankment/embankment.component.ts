import { Component, Input, OnInit } from '@angular/core';
import { bundDetail, embankmentDetails } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-embankment',
  templateUrl: './embankment.component.html',
  styleUrls: ['./embankment.component.css']
})
export class EmbankmentComponent implements OnInit {
  @Input() embankmentDetail?: embankmentDetails;
  bundIssues: any[] = [];
  bundFunctionalities: any[] = [];
  constructor() { }

  ngOnInit(): void {
    if(this.embankmentDetail?.issuesInBund)
     this.bundIssues = JSON.parse(this.embankmentDetail?.issuesInBund)
    if(this.embankmentDetail?.bundFunctionalities)
      this.bundFunctionalities = JSON.parse(this.embankmentDetail?.bundFunctionalities)
  }

}
