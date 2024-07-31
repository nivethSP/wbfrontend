import { Component, Input, OnInit } from '@angular/core';
import { irrigation, lotus } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-lotuscultivation',
  templateUrl: './lotuscultivation.component.html',
  styleUrls: ['./lotuscultivation.component.css']
})
export class LotuscultivationComponent implements OnInit {
  @Input() lotus?: lotus;
  constructor() { }

  ngOnInit(): void {
  }

}
