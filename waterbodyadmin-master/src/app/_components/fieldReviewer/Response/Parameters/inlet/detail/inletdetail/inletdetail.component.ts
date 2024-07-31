import { Component, Input, OnInit } from '@angular/core';
import { inlet } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-inletdetail',
  templateUrl: './inletdetail.component.html',
  styleUrls: ['./inletdetail.component.css']
})
export class InletdetailComponent implements OnInit {
  @Input() inlet?: inlet;
  constructor() { }

  ngOnInit(): void {
  }

}
