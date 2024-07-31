import { Component, Input, OnInit } from '@angular/core';
import { subsurfaceFlow } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-subsurfaceflow',
  templateUrl: './subsurfaceflow.component.html',
  styleUrls: ['./subsurfaceflow.component.css']
})
export class SubsurfaceflowComponent implements OnInit {
  @Input() subsurfaceFlow?: subsurfaceFlow;
  constructor() { }

  ngOnInit(): void {
  }

}
