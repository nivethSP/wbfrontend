import { Component, Input, OnInit } from '@angular/core';
import { outletParameter } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {
  @Input() outletParameter?: outletParameter;
  constructor() { }

  ngOnInit(): void {
  }

}
