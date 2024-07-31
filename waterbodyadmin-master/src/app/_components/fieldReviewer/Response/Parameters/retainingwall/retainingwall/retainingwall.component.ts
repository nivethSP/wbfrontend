import { Component, Input, OnInit } from '@angular/core';
import { retainingWallParameters } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-retainingwall',
  templateUrl: './retainingwall.component.html',
  styleUrls: ['./retainingwall.component.css']
})
export class RetainingwallComponent implements OnInit {
  @Input() retainingWallParameter?: retainingWallParameters;
  damagedWallIssues: any[] = [];
  constructor() { }

  ngOnInit(): void {
    if(this.retainingWallParameter?.direction)
    this.damagedWallIssues = JSON.parse(this.retainingWallParameter?.direction)
  }

}
