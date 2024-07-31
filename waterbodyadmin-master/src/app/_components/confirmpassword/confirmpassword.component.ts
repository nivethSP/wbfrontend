import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Location } from '@angular/common';
import { ConfirmPassword } from 'src/app/_model/presentation/usersecret';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SuccessDialogComponent } from 'src/app/_shared/dialogs/success-dialog/success-dialog/success-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandlerService } from 'src/app/_shared/error-handler.service';
@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.css']
})
export class ConfirmpasswordComponent implements OnInit {
  private uid: string = ''
  private token: string = ''
  private dialogConfig: any;
  confirmPasswordForm: FormGroup;
  constructor(private route: ActivatedRoute,private router: Router, 
    private fb: FormBuilder, 
    private dialog: MatDialog,
    private errorService: ErrorHandlerService,
    private authService: AuthenticationService,private location: Location) {

  }
  ngOnInit(): void {
    this.createConfirmPasswordForm();
    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    }
    this.route.paramMap
    .subscribe(params => {
         this.uid = params.get('uid') || '';
         this.token = params.get('token') || '';
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.confirmPasswordForm.value; }
  createConfirmPasswordForm() {
    this.confirmPasswordForm = this.fb.group({
      new_password: ['', Validators.required]
    });
  }

  resetPassword() {
    let confirmPwd: ConfirmPassword = {
      new_password: this.confirmPasswordForm.get("new_password")?.value,
      uid: this.uid,
      token: this.token
    }
    this.authService.confirmPasswordReset(confirmPwd)
    .subscribe({
      next: () => {
        let dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

        //we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
        dialogRef.afterClosed()
          .subscribe(result => {
            this.router.navigate(['/login']);
          });

      },
      error: error => {
        this.errorService.dialogConfig = { ...this.dialogConfig };
        this.errorService.handleError(error);
      }
    });
  }
}
