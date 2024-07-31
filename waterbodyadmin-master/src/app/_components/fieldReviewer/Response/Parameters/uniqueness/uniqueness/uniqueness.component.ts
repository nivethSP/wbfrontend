import { Component, Input, OnInit } from '@angular/core';
import { uniquenessParameters } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-uniqueness',
  templateUrl: './uniqueness.component.html',
  styleUrls: ['./uniqueness.component.css']
})
export class UniquenessComponent implements OnInit {
  @Input() uniquenessParameter?: uniquenessParameters;
  uniquenessOfTanks: any[] = [];
  constructor() { }

  ngOnInit(): void {
    if (this.uniquenessParameter?.uniquenessOfTank)
      this.uniquenessOfTanks = JSON.parse(this.uniquenessParameter?.uniquenessOfTank)
    if (this.uniquenessParameter?.uniqueness)
      this.uniquenessOfTanks = JSON.parse(this.uniquenessParameter?.uniqueness)

  }

}
