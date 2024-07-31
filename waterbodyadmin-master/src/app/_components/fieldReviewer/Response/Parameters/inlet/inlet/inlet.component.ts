import { Component, Input, OnInit } from '@angular/core';
import { inletParameter } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-inlet',
  templateUrl: './inlet.component.html',
  styleUrls: ['./inlet.component.css']
})
export class InletComponent implements OnInit {
  @Input() inletParameter?: inletParameter;
  constructor() { }

  ngOnInit(): void {
  }

}
