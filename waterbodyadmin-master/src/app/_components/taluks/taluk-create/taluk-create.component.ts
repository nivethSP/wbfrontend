import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Location } from '@angular/common';
import { Session } from 'src/app/_model/Session';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { Resource } from 'src/app/_model/Resource';
import { SuccessDialogComponent } from 'src/app/_shared/dialogs/success-dialog/success-dialog/success-dialog.component';
import { TalukService } from 'src/app/_services/taluk.service';
import { Taluk } from 'src/app/_model/Taluk';
import { DistrictService } from 'src/app/_services/district.service';

@Component({
  selector: 'app-taluk-create',
  templateUrl: './taluk-create.component.html',
  styleUrls: ['./taluk-create.component.css']
})
export class TalukCreateComponent implements OnInit {
  districts: Resource[];
  loading = false;
  submitted = false;
  id: string;
  isAddMode: boolean;
  user: Session;
  private dialogConfig: any;
  resourceForm = this.fb.group({
    name: [null, Validators.required],
    code: [null, Validators.required],
    district: [null, Validators.required],
    description: [null]

  });
  constructor(private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private talukService: TalukService,
    private authService: AuthenticationService,
    private districtS: DistrictService,
    private route: ActivatedRoute, private dialog: MatDialog, private errorService: ErrorHandlerService) {
    this.user = this.authService.userValue;
    this.districtS.getDictionary()
    .subscribe(results => {
      this.districts = results
    });
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }

    if (!this.isAddMode) {
      this.talukService.get(this.id)
        .pipe(first())
        .subscribe(x => this.resourceForm.patchValue(x));
    }

  }

  public onCancel = () => {
    this.location.back();
  }

  onSubmit() {
    this.submitted = true;


    // stop here if form is invalid
    if (this.resourceForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createResource();
    } else {
      this.updateResource();
    }
  }

  private createResource() {
    let newresource: Taluk = {
      code: this.resourceForm.get("code")?.value,
      name: this.resourceForm.get("name")?.value,
      district: this.resourceForm.get("district")?.value,
      createdBy: this.user.username
    }
    this.talukService.create(newresource)
      .pipe(first())
      .subscribe({
        next: () => {
          let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

          //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
          dialogRef.afterClosed()
            .subscribe(result => {
              this.location.back();
            });

        },
        error: error => {
          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleError(error);
          this.loading = false;
        }
      });
  }
  private updateResource() {
    let updatedresource: Taluk = {
      code: this.resourceForm.get("code")?.value,
      name: this.resourceForm.get("name")?.value,
      district: this.resourceForm.get("district")?.value,
      lastModifiedBy: this.user.username
    }
    this.talukService.update(this.id, updatedresource)
      .pipe(first())
      .subscribe({
        next: () => {
          let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

          //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
          dialogRef.afterClosed()
            .subscribe(result => {
              this.location.back();
            });
        },
        error: error => {
          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleError(error);
          this.loading = false;
        }
      });
  }

}
