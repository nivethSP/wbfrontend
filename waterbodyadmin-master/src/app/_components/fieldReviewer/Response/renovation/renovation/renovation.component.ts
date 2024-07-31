import { Component, Input, OnInit } from '@angular/core';
import { renovationDetails } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-renovation',
  templateUrl: './renovation.component.html',
  styleUrls: ['./renovation.component.css']
})
export class RenovationComponent implements OnInit {
  @Input() renovationDetail?: renovationDetails;
  activites: any[] = [];
  constructor() { }

  ngOnInit(): void {
    if(this.renovationDetail?.activitiesUndertaken)
     this.activites = JSON.parse(this.renovationDetail?.activitiesUndertaken)
  }

}
