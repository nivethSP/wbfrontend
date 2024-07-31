import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource } from 'src/app/_model/Resource';
import { Session } from 'src/app/_model/Session';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { BlockService } from 'src/app/_services/block.service';
import { MonthService } from 'src/app/_services/month.service';
import { PanchayatService } from 'src/app/_services/panchayat.service';
import { TalukService } from 'src/app/_services/taluk.service';
import { WaterbodyavailabilityService } from 'src/app/_services/waterbodyavailability.service';
import { WaterbodytanktypeService } from 'src/app/_services/waterbodytanktype.service';
import { WaterbodytypeownershipService } from 'src/app/_services/waterbodytypeownership.service';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';

@Component({
  selector: 'app-particulars',
  templateUrl: './particulars.component.html',
  styleUrls: ['./particulars.component.css']
})
export class ParticularsComponent implements OnInit {
  loading = false;
  submitted = false;
  id: string;
  isAddMode: boolean;
  user: Session;
  taluks: Resource[];
  blocks: Resource[];
  panchayats: Resource[];
  ownerships: Resource[];
  tanktypes: Resource[]
  private dialogConfig: any;
  particularsForm: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService,
    private talukS: TalukService,
    private blockS: BlockService,
    private panchayatS: PanchayatService,
    private ownershipS: WaterbodytypeownershipService,
    private tanktypeS: WaterbodytanktypeService,
    private waterAvailabilityService: WaterbodyavailabilityService,
    private route: ActivatedRoute, private dialog: MatDialog, private errorService: ErrorHandlerService) {
    this.talukS.getDictionary()
      .subscribe(results => {
        this.taluks = results
      });
    this.blockS.getDictionary()
      .subscribe(results => {
        this.blocks = results
      });
    this.ownershipS.getDictionary()
      .subscribe(results => {
        this.ownerships = results
      });
    this.tanktypeS.getDictionary()
      .subscribe(results => {
        this.tanktypes = results
      });
  }

  ngOnInit(): void {
    this.particularsForm = this.fb.group({
      uniqueid: [null, Validators.required],
      taluk: [null, Validators.required],
      block: [null, Validators.required],
      panchayat: [null, Validators.required],
      village: [null, Validators.required],
      surveyno: [null, Validators.required],
      waterbodytype: [null, Validators.required],
      ownership: [null, Validators.required],
      tanktype: [null, Validators.required],
      neerkattipractice: [null, Validators.required],
      legalissue: [null, Validators.required],
      status: [null, Validators.required]
    });
  }

  onblockchange(value: string) {
    console.log(value);
    this.panchayatS.getDictionaryByBlock(value)
      .subscribe(results => {
        this.panchayats = results
      });
  }

}
