import { Component, Input, OnInit } from '@angular/core';
import { duckRearing } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-duck-rearing',
  templateUrl: './duck-rearing.component.html',
  styleUrls: ['./duck-rearing.component.css']
})
export class DuckRearingComponent implements OnInit {
  @Input() duckRearing?: duckRearing;
  constructor() { }

  ngOnInit(): void {
  }

}
