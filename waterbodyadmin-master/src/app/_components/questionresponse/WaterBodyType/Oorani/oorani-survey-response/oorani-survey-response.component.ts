import { WaterbodytypeownershipService } from 'src/app/_services/waterbodytypeownership.service';
import { WaterbodytypeService } from 'src/app/_services/waterbodytype.service';
import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { WaterBodyconstants } from 'src/app/_components/waterBodyTypeResponse/tank/questions/constant';
import { WaterBody, WaterBodyParameter } from 'src/app/_model/FieldReviewerSurveyResponse';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Resource } from 'src/app/_model/Resource';
import { MonthService } from 'src/app/_services/month.service';
import { MatListOption } from '@angular/material/list';
import { HydrologicPrioritySourceSupplyDetail, HydrologicSourceSupplyDetail } from 'src/app/_model/ResponseEntity';
import { Session } from 'src/app/_model/Session';
import { WaterbodysourceService } from 'src/app/_services/waterbodysource.service';

@Component({
  selector: 'app-oorani-survey-response',
  templateUrl: './oorani-survey-response.component.html',
  styleUrls: ['./oorani-survey-response.component.css']
})
export class OoraniSurveyResponseComponent implements OnInit {
  @Input() surveyResponse?: WaterBody;
  user: Session;
  waterParams: WaterBodyParameter
  waterbodyTypes: Resource[];

  waterBodyTypeAvailability: string;

  ownerShips: Resource[];
  monthFillings: Resource[];
  dryFillings: Resource[];

  sourcesofSupply: Resource[];

  hydrologicsupplySources: HydrologicSourceSupplyDetail[];
  hydrologicprioritysupplySources: HydrologicPrioritySourceSupplyDetail[];

  profiles = [
    { id: 'true', name: 'Yes' },
    { id: 'false', name: 'No' }
  ];
  particularsForm = this._formBuilder.group({
    uniqueid: [null, Validators.required],
    taluk: [null],
    block: [null],
    panchayat: [null],
    village: [null],
    surveyNumber: [null, Validators.required],
    waterbodyType: [null],
    waterBodyAvailability: [null, Validators.required],
    ownership: [null],
    tanktype: [null, Validators.required],
    createdBy: [null]
  });
  hydrologicalResponseForm = this._formBuilder.group({
    waterSpreadArea: [null],
    registeredAyacut: [null],
    originalCapacity: [null],
    noOfFillings: [null],
    monthOfFirstFilling: [null],
    waterAvailability: [null],
    noOfSources: [null],
    typeOfCatchment: [null],
    sourcesOfSupply: [null],
    monthOfScarcity: [null],
    name: [null, Validators.required]
  });
  constructor(private _formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private waterbodyTypeS: WaterbodytypeService,
    private waterbodyOwnerS: WaterbodytypeownershipService,
    private monthS: MonthService,
    private waterSourceS: WaterbodysourceService) {
    this.user = this.authService.userValue;
  }
  private LoadMasterData() {
    this.waterbodyTypeS.getDictionary()
      .subscribe(results => {
        this.waterbodyTypes = results
      });
    this.waterbodyOwnerS.getDictionary()
      .subscribe(results => {
        this.ownerShips = results
      });
    this.monthS.getDictionary()
      .subscribe(results => {
        this.monthFillings = results
        this.dryFillings = results
      });
    this.waterSourceS.getDictionary()
      .subscribe(results => {
        this.sourcesofSupply = results
      });
  }
  ngOnInit(): void {
    console.log("From Oorani component");
    console.log(this.surveyResponse);

    this.LoadMasterData();
    if (this.surveyResponse) {
      this.waterParams = JSON.parse(this.surveyResponse.waterParams)
      console.log(this.waterParams);
      this.waterBodyTypeAvailability = this.getSelectedWaterBodyAvailability(this.surveyResponse.waterBodyAvailability);
      this.particularsForm.patchValue(this.surveyResponse);
      this.hydrologicalResponseForm.patchValue(this.waterParams.hydrologicParamaters);
    }

  }
  onNext(stepper: MatStepper, key: string) {
    console.log("Selected Index is " + stepper.selectedIndex)
    switch (key) {
      case WaterBodyconstants.PARTICULAR_DETAILS: {
        this.saveParticularDetails(stepper);
        break;
      }
    }
  }
  getSelectedWaterBodyAvailability(value: string): string {
    if (value) {
      return 'true';
    }
    return 'false';
  }
  onChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    //console.log(options.map(o => o.value));
    console.log(options);
    this.hydrologicsupplySources = options.map((resource) => {
      return { source: resource.value.name, createdBy: this.user.username }
    })

    console.log(this.hydrologicsupplySources);
  }
  onPrioritizeSourceChange(options: MatListOption[]) {
    // map these MatListOptions to their values
    console.log(options.map(o => o.value));
    this.hydrologicprioritysupplySources = options.map((resource) => {
      return { prioritysource: resource.value.id, createdBy: this.user.username }
    })
  }
  private saveParticularDetails(stepper: MatStepper) {

  }

}
