import { Component, Input, OnInit } from '@angular/core';
import { encroachmentDetails } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-encroachment',
  templateUrl: './encroachment.component.html',
  styleUrls: ['./encroachment.component.css']
})
export class EncroachmentComponent implements OnInit {
  @Input() encroachmentDetail?: encroachmentDetails;
selectedNature: any;
  constructor() { }

  ngOnInit(): void {
  }

}


