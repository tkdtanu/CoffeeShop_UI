import { AuthService } from './../service/auth-service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html'
})
export class SignUpComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required]
    });
  }
  signup() {
    if (!this.form.valid) {
      return;
    }
    const val: any = this.form.value;

    this.authService.signup(val)
      .subscribe(
        () => {
          alert("User Create Successfully");
          this.router.navigate(['/welcome']);
        }
      );
  }
  login() {
    this.router.navigate(['/login']);
  }
}
