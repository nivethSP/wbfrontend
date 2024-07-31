import { Component, Input, OnInit } from '@angular/core';
import { riverStream } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-riverstream',
  templateUrl: './riverstream.component.html',
  styleUrls: ['./riverstream.component.css']
})
export class RiverstreamComponent implements OnInit {
  @Input() riverStream?: riverStream;
  streamIssues: any[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.riverStream)
    if(this.riverStream?.issues)
    {
      this.streamIssues = JSON.parse(this.riverStream?.issues)
    }
  }

}
