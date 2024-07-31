import { Urbanlocalbody } from './../../../_model/Urbanlocalbody';
import { UrbanlocalbodiesService } from './../../../_services/urbanlocalbodies.service';
import { JurisdictionService } from './../../../_services/jurisdiction.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { Location } from '@angular/common';
import { Session } from 'src/app/_model/Session';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
import { SuccessDialogComponent } from 'src/app/_shared/dialogs/success-dialog/success-dialog/success-dialog.component';


@Component({
  selector: 'app-urbanlocalbodies-create',
  templateUrl: './urbanlocalbodies-create.component.html',
  styleUrls: ['./urbanlocalbodies-create.component.css']
})
export class UrbanlocalbodiesCreateComponent implements OnInit {
  // defined the array of data
  Types = [
    {
      name: "Town Panchayat",
      code: "1",
    },
    {
      name: "Municipality",
      code: "2",
    },
    {
      name: "Corporation",
      code: "3",
    }
  ]
  loading = false;
  submitted = false;
  id: string;
  isAddMode: boolean;
  user: Session;

  Typecode: any
  private dialogConfig: any;
  resourceForm = this.fb.group({
    TypeCode: [null, Validators.required],
    Name: [null, Validators.required],
    WardCode: [null, Validators.required],
    Ward: [null, Validators.required],
  });
  constructor(private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private urbanlocalbodiesService: UrbanlocalbodiesService,
    private authService: AuthenticationService,
    private route: ActivatedRoute, private dialog: MatDialog, private errorService: ErrorHandlerService) {
    this.user = this.authService.userValue;
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
      this.urbanlocalbodiesService.get(this.id)
        .pipe(first())
        .subscribe(x => {
          console.log(x);
          this.Typecode = x.TypeCode
          this.resourceForm.patchValue(x)
        }

        );
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
    let found = [];
    const searchTerm = this.resourceForm.get("TypeCode")?.value;
    found = this.Types.filter(function (element) {
      return element.code.toLowerCase() == searchTerm.toLowerCase();
    });
    let urbanlocalbody: Urbanlocalbody = {
      TypeCode: this.resourceForm.get("TypeCode")?.value,
      Type: found[0].name,
      name: this.resourceForm.get("Name")?.value,
      Name: this.resourceForm.get("Name")?.value,
      WardCode: this.resourceForm.get("WardCode")?.value,
      Ward: this.resourceForm.get("Ward")?.value,
      createdBy: this.user.username
    }
    this.urbanlocalbodiesService.create(urbanlocalbody)
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
    let found = [];
    const searchTerm = this.resourceForm.get("TypeCode")?.value;
    found = this.Types.filter(function (element) {
      return element.code.toLowerCase() == searchTerm.toLowerCase();
    });
    let urbanlocalbody: Urbanlocalbody = {
      TypeCode: this.resourceForm.get("TypeCode")?.value,
      Type: found[0].name,
      name: this.resourceForm.get("Name")?.value,
      Name: this.resourceForm.get("Name")?.value,
      WardCode: this.resourceForm.get("WardCode")?.value,
      Ward: this.resourceForm.get("Ward")?.value,
      lastModifiedBy: this.user.username
    }
    this.urbanlocalbodiesService.update(this.id, urbanlocalbody)
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
          console.log(error);
          this.errorService.handleError(error);
          this.loading = false;
        }
      });
  }

}
