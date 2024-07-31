import { Habitation } from './../../../_model/Habitation';
import { HabitationService } from './../../../_services/habitation.service';
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
  selector: 'app-habitation-create',
  templateUrl: './habitation-create.component.html',
  styleUrls: ['./habitation-create.component.css']
})
export class HabitationCreateComponent implements OnInit {

  loading = false;
  submitted = false;
  id: string;
  isAddMode: boolean;
  user: Session;
  private dialogConfig: any;
  resourceForm = this.fb.group({
    DistrictCode: [null, Validators.required],
    District: [null, Validators.required],
    BlockCode: [null, Validators.required],
    Block: [null, Validators.required],
    VillageCode: [null, Validators.required],
    Village: [null, Validators.required],
    HabitationCode: [null, Validators.required],
    Habitation: [null, Validators.required]

  });
  constructor(private fb: FormBuilder,
    private router: Router,
    private location: Location,
    private habitationService: HabitationService,
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
      this.habitationService.get(this.id)
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
    let habitation: Habitation = {
      name: this.resourceForm.get("Habitation")?.value,
      DistrictCode: this.resourceForm.get("DistrictCode")?.value,
      District: this.resourceForm.get("District")?.value,
      BlockCode: this.resourceForm.get("BlockCode")?.value,
      Block: this.resourceForm.get("Block")?.value,
      VillageCode: this.resourceForm.get("VillageCode")?.value,
      Village: this.resourceForm.get("Village")?.value,
      HabitationCode: this.resourceForm.get("HabitationCode")?.value,
      Habitation: this.resourceForm.get("Habitation")?.value,
      createdBy: this.user.username
    }
    this.habitationService.create(habitation)
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
    let jurisdiction: Habitation = {
      name: this.resourceForm.get("Habitation")?.value,
      DistrictCode: this.resourceForm.get("DistrictCode")?.value,
      District: this.resourceForm.get("District")?.value,
      BlockCode: this.resourceForm.get("BlockCode")?.value,
      Block: this.resourceForm.get("Block")?.value,
      VillageCode: this.resourceForm.get("VillageCode")?.value,
      Village: this.resourceForm.get("Village")?.value,
      HabitationCode: this.resourceForm.get("HabitationCode")?.value,
      Habitation: this.resourceForm.get("Habitation")?.value,
      lastModifiedBy: this.user.username
    }
    console.log(jurisdiction);
    console.log(this.id);
    this.habitationService.update(this.id, jurisdiction)
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
