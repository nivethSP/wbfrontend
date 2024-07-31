import { Component, Input, OnInit } from '@angular/core';
import { WaterBody } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-particulars',
  templateUrl: './particulars.component.html',
  styleUrls: ['./particulars.component.css']
})
export class ParticularsComponent implements OnInit {
  @Input() surveyResponse?: WaterBody;
  constructor() { }

  ngOnInit(): void {
    console.log(this.surveyResponse);
  }

}
