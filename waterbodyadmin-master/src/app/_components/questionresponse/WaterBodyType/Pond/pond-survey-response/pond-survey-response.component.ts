import { Component, Input, OnInit } from '@angular/core';
import { WaterBody } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-pond-survey-response',
  templateUrl: './pond-survey-response.component.html',
  styleUrls: ['./pond-survey-response.component.css']
})
export class PondSurveyResponseComponent implements OnInit {
  @Input() surveyResponse?: WaterBody;
  constructor() { }

  ngOnInit(): void {
  }

}
