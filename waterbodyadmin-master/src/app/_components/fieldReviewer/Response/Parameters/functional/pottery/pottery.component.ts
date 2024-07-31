import { Component, Input, OnInit } from '@angular/core';
import { pottery } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-pottery',
  templateUrl: './pottery.component.html',
  styleUrls: ['./pottery.component.css']
})
export class PotteryComponent implements OnInit {
  @Input() pottery?: pottery;
  constructor() { }

  ngOnInit(): void {
  }

}
