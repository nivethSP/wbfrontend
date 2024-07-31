import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetPwdError = '';
  resetPasswordForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, 
    private activeRoute: ActivatedRoute,
    private authService: AuthenticationService) {
      console.log(this.activeRoute.snapshot.queryParams)
      console.log(this.activeRoute.snapshot.params)
  }

  reateLoginForm() {
    this.resetPasswordForm = this.fb.group({
      password: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.reateLoginForm();
  }

}
