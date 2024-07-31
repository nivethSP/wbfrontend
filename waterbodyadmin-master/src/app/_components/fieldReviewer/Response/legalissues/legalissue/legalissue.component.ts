import { Component, Input, OnInit } from '@angular/core';
import { legalParameters } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-legalissue',
  templateUrl: './legalissue.component.html',
  styleUrls: ['./legalissue.component.css']
})
export class LegalissueComponent implements OnInit {
  @Input() legalIssueParameter?: legalParameters;;
  constructor() { }

  ngOnInit(): void {
  }

}
