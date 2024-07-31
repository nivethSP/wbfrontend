import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minicard',
  templateUrl: './minicard.component.html',
  styleUrls: ['./minicard.component.css']
})
export class MinicardComponent implements OnInit {
  @Input() icon: string;
  @Input() name: string;
  @Input() title: string;
  @Input() value: number;
  @Input() filterKey: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectToDetail(name: string,filterKey: string): void {
      console.log(name);
      if(name == 'TankSummaryCard')
        this.router.navigate((['/','waterbodyupload']))
      else if(name == 'ResponseSummaryCard')
        this.router.navigate((['/','review']))
      else if(name == 'UserCard')
        this.router.navigate((['/','user','users']))
      else if(name == 'FieldWorkerCard')
        this.router.navigate((['/','user','users',this.filterKey]))
  }

}
