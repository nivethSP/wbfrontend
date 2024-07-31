import { Component, Input, OnInit } from '@angular/core';
import { freeCatchment } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-freecatchment',
  templateUrl: './freecatchment.component.html',
  styleUrls: ['./freecatchment.component.css']
})
export class FreecatchmentComponent implements OnInit {
  @Input() freeCatchment?: freeCatchment;
  streamIssues: any[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.freeCatchment)
    if(this.freeCatchment?.issues)
    {
      this.streamIssues = JSON.parse(this.freeCatchment?.issues)
    }
  }

}
