import { Component, Input, OnInit } from '@angular/core';
import { presenceOfWUA } from 'src/app/_model/FieldReviewerSurveyResponse';

@Component({
  selector: 'app-presenceofwua',
  templateUrl: './presenceofwua.component.html',
  styleUrls: ['./presenceofwua.component.css']
})
export class PresenceofwuaComponent implements OnInit {
  @Input() presenceOfWUA?: presenceOfWUA;
  constructor() { }

  ngOnInit(): void {
  }

}
