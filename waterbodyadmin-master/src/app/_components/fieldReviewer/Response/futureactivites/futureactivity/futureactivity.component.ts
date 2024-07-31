import { Component, Input, OnInit } from '@angular/core';
import { futureActivities } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-futureactivity',
  templateUrl: './futureactivity.component.html',
  styleUrls: ['./futureactivity.component.css']
})
export class FutureactivityComponent implements OnInit {
  @Input() futureActivity?: futureActivities;
  activitiesUndertaken: any[] = [];
  constructor() { }

  ngOnInit(): void {
    if(this.futureActivity?.activitiesUndertaken)
     this.activitiesUndertaken = JSON.parse(this.futureActivity?.activitiesUndertaken)
  }

}
