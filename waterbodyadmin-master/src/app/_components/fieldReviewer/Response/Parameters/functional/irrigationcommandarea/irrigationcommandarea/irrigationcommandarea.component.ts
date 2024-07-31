import { Component, Input, OnInit } from '@angular/core';
import { functionalParameters, irrigation } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-irrigationcommandarea',
  templateUrl: './irrigationcommandarea.component.html',
  styleUrls: ['./irrigationcommandarea.component.css']
})
export class IrrigationcommandareaComponent implements OnInit {
  @Input() irrigation?: irrigation;
  natureOfAyacuts: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    if(this.irrigation?.natureOfAyacut)
    this.natureOfAyacuts = JSON.parse(this.irrigation?.natureOfAyacut)
  }

}
