import { Component, Input, OnInit } from '@angular/core';
import { fishing } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-fishing',
  templateUrl: './fishing.component.html',
  styleUrls: ['./fishing.component.css']
})
export class FishingComponent implements OnInit {
  @Input() fishing?: fishing;
  constructor() { }

  ngOnInit(): void {
  }

}
