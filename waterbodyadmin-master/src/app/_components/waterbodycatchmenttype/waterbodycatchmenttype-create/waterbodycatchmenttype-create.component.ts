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
import { WaterbodycatchmenttypeService } from 'src/app/_services/waterbodycatchmenttype.service';

@Component({
  selector: 'app-waterbodycatchmenttype-create',
  templateUrl: './waterbodycatchmenttype-create.component.html',
  styleUrls: ['./waterbodycatchmenttype-create.component.css']
})
export class WaterbodycatchmenttypeCreateComponent implements OnInit {

  loading = false;
  submitted = false;
  id: string;
  isAddMode: boolean;
  user: Session;
  private dialogConfig: any;
  resourceForm = this.fb.group({
    name: [null, Validators.required],
    description: [null]

  });
  constructor(private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private waterbodycatchmenttypeService: WaterbodycatchmenttypeService,
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
      this.waterbodycatchmenttypeService.get(this.id)
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
    let newresource: Resource = {
      name: this.resourceForm.get("name")?.value,
      createdBy: this.user.username
    }
    this.waterbodycatchmenttypeService.create(newresource)
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
    let updatedresource: Resource = {
      name: this.resourceForm.get("name")?.value,
      lastModifiedBy: this.user.username
    }
    this.waterbodycatchmenttypeService.update(this.id, updatedresource)
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
