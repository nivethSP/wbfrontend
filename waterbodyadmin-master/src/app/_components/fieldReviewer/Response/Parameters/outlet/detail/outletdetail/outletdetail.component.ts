import { Component, Input, OnInit } from '@angular/core';
import { outlet } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-outletdetail',
  templateUrl: './outletdetail.component.html',
  styleUrls: ['./outletdetail.component.css']
})
export class OutletdetailComponent implements OnInit {
  @Input() outlet?: outlet
  constructor() { }

  ngOnInit(): void {
  }

}
