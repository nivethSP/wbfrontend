import { Component, Input, OnInit } from '@angular/core';
import { upperTankSluice } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-supplyfromuppertanksluice',
  templateUrl: './supplyfromuppertanksluice.component.html',
  styleUrls: ['./supplyfromuppertanksluice.component.css']
})
export class SupplyfromuppertanksluiceComponent implements OnInit {
  @Input() upperTankSluice?: upperTankSluice;
  streamIssues: any[] = [];
  constructor() { }

  ngOnInit(): void {
    if(this.upperTankSluice?.issues)
    {
      this.streamIssues = JSON.parse(this.upperTankSluice?.issues)
    }
  }

}
