import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Resource } from 'src/app/_model/Resource';
import { Session } from 'src/app/_model/Session';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { BlockService } from 'src/app/_services/block.service';
import { DistrictService } from 'src/app/_services/district.service';
import { PanchayatService } from 'src/app/_services/panchayat.service';
import { TalukService } from 'src/app/_services/taluk.service';
import { Location } from '@angular/common';
import { WaterbodytypeService } from 'src/app/_services/waterbodytype.service';
import { SuccessDialogComponent } from 'src/app/_shared/dialogs/success-dialog/success-dialog/success-dialog.component';
import { WaterbodyFileUploadService } from 'src/app/_services/waterbodyfileupload.service';
import { WaterBodyFileUpload } from 'src/app/_model/WaterBodyFileUpload';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-waterbodyupload-create',
  templateUrl: './waterbodyupload-create.component.html',
  styleUrls: ['./waterbodyupload-create.component.css']
})
export class WaterbodyuploadCreateComponent implements OnInit {
  districts: Resource[];
  taluks: Resource[];
  blocks: Resource[];
  panchayats: Resource[];
  waterBodyTypes: Resource[];
  user: Session;
  loading = false;
  private dialogConfig: any;
  waterBodyUploadForm = this._formBuilder.group({
    profile: [''],
    fileName: '',
    village: [null, Validators.required],
    block: [null, Validators.required],
    taluk: [null, Validators.required],
    district: [null, Validators.required],
    waterbodytype: [null, Validators.required],
    waterbodyId: [null, Validators.required],
    waterbodyName: [null, Validators.required]
  });
  constructor(private _formBuilder: FormBuilder, private router: Router,
    private authService: AuthenticationService,
    private location: Location,
    private districtS: DistrictService,
    private talukS: TalukService,
    private blockS: BlockService,
    private panchayatS: PanchayatService,
    private waterbodytypeS: WaterbodytypeService,
    private waterbodyFileUploadS: WaterbodyFileUploadService,
    private errorService: ErrorHandlerService,
    private dialog: MatDialog) {
    this.user = this.authService.userValue;
    this.LoadMasterData();
  }
  private LoadMasterData() {
    this.districtS.getDictionary()
      .subscribe(results => {
        this.districts = results
      });
    this.waterbodytypeS.getDictionary()
      .subscribe(results => {
        this.waterBodyTypes = results
      });
  }
  ondistrictchange(value: string) {
    this.blockS.getDictionaryByDistrict(value)
      .subscribe(results => {
        this.blocks = results
      });
    this.talukS.getDictionaryByDistrict(value)
      .subscribe(results => {
        this.taluks = results
      });
  }
  onblockchange(value: string) {
    this.panchayatS.getDictionaryByBlock(value)
      .subscribe(results => {
        this.panchayats = results
      });
  }
  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const filenameControl = this.waterBodyUploadForm.get('fileName');
      filenameControl?.setValue(file.name);
      const control = this.waterBodyUploadForm.get('profile');
      if (control)
        control.setValue(file);
    }
  }
  ngOnInit(): void {
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }
  }
  onSubmit() {
    this.waterbodyFileUploadS.IsWaterBodyIdExists(this.waterBodyUploadForm.get("waterbodyId")?.value)
      .subscribe((response: Boolean) => {
        if (!response) {
          this.loading = true;
          const control = this.waterBodyUploadForm.get('profile');
          const filenameControl = this.waterBodyUploadForm.get('fileName');
          console.log(this.user.username)
          if (control) {
            let detail: WaterBodyFileUpload = {
              district: this.waterBodyUploadForm.get("district")?.value,
              block: this.waterBodyUploadForm.get("block")?.value,
              taluk: this.waterBodyUploadForm.get("taluk")?.value,
              village: this.waterBodyUploadForm.get("village")?.value,
              waterbodyId: this.waterBodyUploadForm.get("waterbodyId")?.value,
              waterbodyName: this.waterBodyUploadForm.get("waterbodyName")?.value,
              waterbodytype: this.waterBodyUploadForm.get("waterbodytype")?.value,
              filename: filenameControl?.value,
              createdBy: this.user.username
            }

            this.waterbodyFileUploadS.createWaterBodyInfo(control.value, detail).subscribe(
              (res: WaterBodyFileUpload) => {
                console.log(res.id)
                this.waterbodyFileUploadS.processFileMetaData(res.id)
                  .subscribe(
                    (presponse: any) => {
                      this.loading = false;
                      let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

                      //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
                      dialogRef.afterClosed()
                        .subscribe(result => {
                          this.location.back();
                        });
                    },
                    (error) => {
                      this.errorService.dialogConfig = { ...this.dialogConfig };
                      this.errorService.handleError(error);
                      this.loading = false;
                    }
                  )
              },
              (err) => {
                console.log(err)
                this.loading = false;
              }
            );
          }
        }
        else {
          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleExtensionError("Waterbody ID Already Exists")
          this.loading = false;
        }
      });



  }
  public onCancel = () => {
    this.location.back();
  }

}
