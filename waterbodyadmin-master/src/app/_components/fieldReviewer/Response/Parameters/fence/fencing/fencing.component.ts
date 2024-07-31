import { Component, Input, OnInit } from '@angular/core';
import { fenceParameter } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-fencing',
  templateUrl: './fencing.component.html',
  styleUrls: ['./fencing.component.css']
})
export class FencingComponent implements OnInit {
  @Input() fenceParameter?: fenceParameter;
  constructor() { }

  ngOnInit(): void {
  }

}
