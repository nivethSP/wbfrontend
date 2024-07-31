import { Component, Input, OnInit } from '@angular/core';
import { surplusCoarseParameters } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-surpluscoarse',
  templateUrl: './surpluscoarse.component.html',
  styleUrls: ['./surpluscoarse.component.css']
})
export class SurpluscoarseComponent implements OnInit {
  @Input() surplusCoarseParameter?: surplusCoarseParameters;
  constructor() { }

  ngOnInit(): void {
  }

}
