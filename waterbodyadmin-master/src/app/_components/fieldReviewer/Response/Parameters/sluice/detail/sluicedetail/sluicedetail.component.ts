import { Component, Input, OnInit } from '@angular/core';
import { sluiceList } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-sluicedetail',
  templateUrl: './sluicedetail.component.html',
  styleUrls: ['./sluicedetail.component.css']
})
export class SluicedetailComponent implements OnInit {
  @Input() sluiceList?: sluiceList;
  constructor() { }

  ngOnInit(): void {
  }

}
