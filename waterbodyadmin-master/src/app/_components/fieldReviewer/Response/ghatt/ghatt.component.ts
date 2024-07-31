import { Component, OnInit, Input } from '@angular/core';
import { ghatDetail } from 'src/app/_model/FieldReviewerSurveyResponse';
import { bundDetail } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-ghatt',
  templateUrl: './ghatt.component.html',
  styleUrls: ['./ghatt.component.css']
})
export class GhattComponent implements OnInit {
  @Input() ghatDetail?: any; // Assuming the data structure for ghattDetail

  activities: any[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.ghatDetail && this.ghatDetail.activitiesUndertaken) {
      this.activities = JSON.parse(this.ghatDetail.activitiesUndertaken);
    }
  }
}
