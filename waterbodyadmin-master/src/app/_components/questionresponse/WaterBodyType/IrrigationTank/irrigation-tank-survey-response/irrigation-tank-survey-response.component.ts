import { Component, Input, OnInit } from '@angular/core';
import { WaterBody } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-irrigation-tank-survey-response',
  templateUrl: './irrigation-tank-survey-response.component.html',
  styleUrls: ['./irrigation-tank-survey-response.component.css']
})
export class IrrigationTankSurveyResponseComponent implements OnInit {
  @Input() surveyResponse?: WaterBody;
  constructor() { }

  ngOnInit(): void {
  }

}
