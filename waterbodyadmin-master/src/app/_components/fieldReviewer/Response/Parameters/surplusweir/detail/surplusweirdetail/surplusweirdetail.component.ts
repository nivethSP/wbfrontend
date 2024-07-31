import { Component, Input, OnInit } from '@angular/core';
import { surplusWeirList } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-surplusweirdetail',
  templateUrl: './surplusweirdetail.component.html',
  styleUrls: ['./surplusweirdetail.component.css']
})
export class SurplusweirdetailComponent implements OnInit {
  @Input() surplusWeirDetail?: surplusWeirList;
  constructor() { }

  ngOnInit(): void {
  }

}
