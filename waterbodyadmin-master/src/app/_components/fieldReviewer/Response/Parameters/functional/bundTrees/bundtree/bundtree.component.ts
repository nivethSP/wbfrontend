import { Component, Input, OnInit } from '@angular/core';
import { bundTree, fishing } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-bundtree',
  templateUrl: './bundtree.component.html',
  styleUrls: ['./bundtree.component.css']
})
export class BundtreeComponent implements OnInit {
  @Input() bundTree?: bundTree;
  constructor() { }

  ngOnInit(): void {
  }

}
