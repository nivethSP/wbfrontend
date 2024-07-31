import { Component, Input, OnInit } from '@angular/core';
import { others } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit {
  @Input() others?: others;
  constructor() { }

  ngOnInit(): void {
  }

}
