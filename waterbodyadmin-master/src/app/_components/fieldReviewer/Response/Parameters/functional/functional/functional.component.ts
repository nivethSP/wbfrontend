import { Component, Input, OnInit } from '@angular/core';
import { bundTree, duckRearing, fishing, functionalParameters, irrigation, livestock, lotus, others, pottery, waterSpreadArea } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-functional',
  templateUrl: './functional.component.html',
  styleUrls: ['./functional.component.css']
})
export class FunctionalComponent implements OnInit {
  @Input() functionalParameter?: functionalParameters;
  functions: any[] = [];
  irrigation: irrigation
  fishing: fishing
  lotus: lotus
  waterSpreadArea: waterSpreadArea
  duckRearing: duckRearing
  bundTree: bundTree
  pottery: pottery
  livestock: livestock
  others: others
  constructor() { }

  ngOnInit(): void {
    if (this.functionalParameter?.functions)
      this.functions = JSON.parse(this.functionalParameter?.functions)
    if (this.functionalParameter?.functionsList) {
      if (this.functionalParameter?.functionsList.irrigation)
        this.irrigation = this.functionalParameter?.functionsList.irrigation

      if (this.functionalParameter?.functionsList.fishing)
        this.fishing = this.functionalParameter?.functionsList.fishing

      if (this.functionalParameter?.functionsList.lotus)
        this.lotus = this.functionalParameter?.functionsList.lotus

      if (this.functionalParameter?.functionsList.waterSpreadArea)
        this.waterSpreadArea = this.functionalParameter?.functionsList.waterSpreadArea

      if (this.functionalParameter?.functionsList.duckRearing)
        this.duckRearing = this.functionalParameter?.functionsList.duckRearing

      if (this.functionalParameter?.functionsList.bundTrees)
        this.bundTree = this.functionalParameter?.functionsList.bundTrees

      if (this.functionalParameter?.functionsList.pottery)
        this.pottery = this.functionalParameter?.functionsList.pottery

      if (this.functionalParameter?.functionsList.livestock)
        this.livestock = this.functionalParameter?.functionsList.livestock

      if (this.functionalParameter?.functionsList.anyOther)
        this.others = this.functionalParameter?.functionsList.anyOther

    }

  }

}
