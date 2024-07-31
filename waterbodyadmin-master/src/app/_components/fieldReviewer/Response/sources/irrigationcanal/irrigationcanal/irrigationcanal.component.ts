import { Component, Input, OnInit } from '@angular/core';
import { irrigationCanal } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-irrigationcanal',
  templateUrl: './irrigationcanal.component.html',
  styleUrls: ['./irrigationcanal.component.css']
})
export class IrrigationcanalComponent implements OnInit {
  @Input() irrigationCanal?: irrigationCanal;
  canalFeedIssues: any[] = [];
  constructor() { }

  ngOnInit(): void {
    if (this.irrigationCanal?.issues) {
      this.canalFeedIssues = JSON.parse(this.irrigationCanal?.issues)
    }
  }

}
