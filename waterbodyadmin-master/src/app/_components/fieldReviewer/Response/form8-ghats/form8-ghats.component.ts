import { Component, Input } from '@angular/core';
import { Form8GhatsData, Ghat } from './form8-ghats.interface'; // Import the interface

@Component({
  selector: 'app-form8-ghats',
  templateUrl: './form8-ghats.component.html',
  styleUrls: ['./form8-ghats.component.css']
})
export class Form8GhatsComponent {

  @Input() surveyData: Form8GhatsData; // Use the interface to type the input

  constructor() { }

}
