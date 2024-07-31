import { Component, Input, OnInit } from '@angular/core';
import { livestock } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-livestock',
  templateUrl: './livestock.component.html',
  styleUrls: ['./livestock.component.css']
})
export class LivestockComponent implements OnInit {
  @Input() livestock?: livestock;
  constructor() { }

  ngOnInit(): void {
  }

}
