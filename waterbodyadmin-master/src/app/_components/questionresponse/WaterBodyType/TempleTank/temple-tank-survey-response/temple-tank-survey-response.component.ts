import { Component, Input, OnInit } from '@angular/core';
import { WaterBody } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-temple-tank-survey-response',
  templateUrl: './temple-tank-survey-response.component.html',
  styleUrls: ['./temple-tank-survey-response.component.css']
})
export class TempleTankSurveyResponseComponent implements OnInit {
  @Input() surveyResponse?: WaterBody;
  constructor() { }

  ngOnInit(): void {
  }

}
