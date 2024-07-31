import { Component, Input, OnInit } from '@angular/core';
import { spring } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-springs',
  templateUrl: './springs.component.html',
  styleUrls: ['./springs.component.css']
})
export class SpringsComponent implements OnInit {
  @Input() spring?: spring;

  ngOnInit(): void {
  }

}
