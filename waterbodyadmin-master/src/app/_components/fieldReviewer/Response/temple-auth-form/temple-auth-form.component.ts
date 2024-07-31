import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-temple-auth-form',
  templateUrl: './temple-auth-form.component.html',
  styleUrls: ['./temple-auth-form.component.css']
})
export class TempleAuthFormComponent implements OnInit {
  templeAuthForm: FormGroup;
  presenceOfTempleOptions = ['Yes', 'No'];
  personInchargeOptions = ['Yes', 'No'];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.templeAuthForm = this.fb.group({
      presenceOfTempleAdmin: ['', Validators.required],
      nameOfTempleAdministration: [''],
      personForIncharge: [''],
      designation: [''],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit(): void {
    // Initialize form with default values if necessary
  }

  onSubmit(draft: boolean): void {
    if (draft) {
      // Handle draft save logic
      console.log('Saving draft:', this.templeAuthForm.value);
      return;
    }

    if (this.templeAuthForm.invalid) {
      this.showSnackbar('Please fill all required fields correctly.');
      return;
    }

    const formData = this.templeAuthForm.value;
    console.log('Form submitted:', formData);

    // Handle form submission logic here
  }

  showSnackbar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }

  onPresenceOfTempleChange(event: any): void {
    const value = event.value;
    if (value === 'Yes') {
      this.templeAuthForm.controls['nameOfTempleAdministration'].setValidators(Validators.required);
      this.templeAuthForm.controls['personForIncharge'].setValidators(Validators.required);
      this.templeAuthForm.controls['designation'].setValidators(Validators.required);
    } else {
      this.templeAuthForm.controls['nameOfTempleAdministration'].clearValidators();
      this.templeAuthForm.controls['personForIncharge'].clearValidators();
      this.templeAuthForm.controls['designation'].clearValidators();
    }
    this.templeAuthForm.controls['nameOfTempleAdministration'].updateValueAndValidity();
    this.templeAuthForm.controls['personForIncharge'].updateValueAndValidity();
    this.templeAuthForm.controls['designation'].updateValueAndValidity();
  }
}
