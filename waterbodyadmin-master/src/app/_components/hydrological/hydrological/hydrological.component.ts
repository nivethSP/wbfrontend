import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource } from 'src/app/_model/Resource';
import { Session } from 'src/app/_model/Session';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { MonthService } from 'src/app/_services/month.service';
import { WaterbodyavailabilityService } from 'src/app/_services/waterbodyavailability.service';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';

@Component({
  selector: 'app-hydrological',
  templateUrl: './hydrological.component.html',
  styleUrls: ['./hydrological.component.css']
})
export class HydrologicalComponent implements OnInit {
  loading = false;
  submitted = false;
  id: string;
  isAddMode: boolean;
  user: Session;
  monthFillings: Resource[];
  dryFillings: Resource[];
  waterAvailabilites: Resource[];
  private dialogConfig: any;
  hydrologicalResponseForm = this.fb.group({
    tankName: [null, Validators.required],
    waterspreadArea: [null, Validators.required],
    registeredAyacut: [null, Validators.required],
    capacity: [null, Validators.required],
    numberoffillings: [null, Validators.required],
    firstmonthfilling: [null, Validators.required],
    waterAvailability: [null, Validators.required],
    monthdryup: [null, Validators.required],
    numberofsources: [null, Validators.required],
    catchmentType: [null, Validators.required]
  });
  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private monthService: MonthService,
    private waterAvailabilityService: WaterbodyavailabilityService,
    private route: ActivatedRoute, private dialog: MatDialog, private errorService: ErrorHandlerService) {
    this.user = this.authService.userValue;
    this.monthService.getDictionary()
    .subscribe(results => {
      this.monthFillings = results
      this.dryFillings = results
    })
    this.waterAvailabilityService.getDictionary()
    .subscribe(results => {
      this.waterAvailabilites = results
    })
  }
  ngOnInit(): void {
  }

}
