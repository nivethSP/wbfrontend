import { Component, Input, OnInit } from '@angular/core';
import { surplsFromUpperTank } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-surplusfromuppertank',
  templateUrl: './surplusfromuppertank.component.html',
  styleUrls: ['./surplusfromuppertank.component.css']
})
export class SurplusfromuppertankComponent implements OnInit {
  @Input() surplsFromUpperTank?: surplsFromUpperTank;
  streamIssues: any[] = [];
  constructor() { }

  ngOnInit(): void {
    if(this.surplsFromUpperTank?.issues)
    {
      this.streamIssues = JSON.parse(this.surplsFromUpperTank?.issues)
    }
  }

}
