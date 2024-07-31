import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WaterBody } from 'src/app/_model/FieldReviewerSurveyResponse';
import { Resource } from 'src/app/_model/Resource';
import { Session } from 'src/app/_model/Session';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { WaterbodyfieldreviewerresponseService } from 'src/app/_services/waterbodyfieldreviewerresponse.service';
import { WaterbodytypeService } from 'src/app/_services/waterbodytype.service';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';

@Component({
  selector: 'app-questionresponse-create',
  templateUrl: './questionresponse-create.component.html',
  styleUrls: ['./questionresponse-create.component.css']
})
export class QuestionresponseCreateComponent implements OnInit {
  loading = false;
  submitted = false;
  user: Session;
  waterBodyid: string;
  surveyResponse: WaterBody;

  public tankMetaData$: Observable<WaterBody>;

  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private waterbodyfieldreviewerresponseS: WaterbodyfieldreviewerresponseService,
    private authService: AuthenticationService,
    private activeRoute: ActivatedRoute,
    private errorService: ErrorHandlerService) {
    this.user = this.authService.userValue;
    this.waterBodyid = this.activeRoute.snapshot.params['id'];
    console.log(this.waterBodyid);
    this.tankMetaData$ = this.waterbodyfieldreviewerresponseS.getById(this.waterBodyid);
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.tankMetaData$.subscribe(tankMetaData => {
      console.log(tankMetaData);
      this.surveyResponse = tankMetaData
    });
  }

}
