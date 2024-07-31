import { Component, Input, OnInit } from '@angular/core';
import { waterSpreadArea } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-waterspreadarea',
  templateUrl: './waterspreadarea.component.html',
  styleUrls: ['./waterspreadarea.component.css']
})
export class WaterspreadareaComponent implements OnInit {
  @Input() waterSpreadArea?: waterSpreadArea;
  constructor() { }

  ngOnInit(): void {
  }

}
