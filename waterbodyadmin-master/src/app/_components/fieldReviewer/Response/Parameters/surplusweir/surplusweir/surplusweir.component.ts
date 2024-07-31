import { Component, Input, OnInit } from '@angular/core';
import { surplusWeirParameters } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-surplusweir',
  templateUrl: './surplusweir.component.html',
  styleUrls: ['./surplusweir.component.css']
})
export class SurplusweirComponent implements OnInit {
  @Input() surplusWeirParameter?: surplusWeirParameters;
  constructor() { }

  ngOnInit(): void {
  }

}
