import { Component, Input, OnInit } from '@angular/core';
import { sluiceParamteres } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-sluice',
  templateUrl: './sluice.component.html',
  styleUrls: ['./sluice.component.css']
})
export class SluiceComponent implements OnInit {
  @Input() sluiceParamter?: sluiceParamteres;
  constructor() { }

  ngOnInit(): void {
  }

}
