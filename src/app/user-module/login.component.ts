import { AuthService } from './../service/auth-service';
import {Router} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login() {
    if (!this.form.valid) {
      return;
    }
    const val: any = this.form.value;

    if (val.username && val.password) {
      this.authService.login(val.username, val.password)
        .subscribe(
        () => {
          console.log("User is logged in");
          this.router.navigate(['/order']);
        }
        );
    }
  }
  signup() {
    this.router.navigate(['/signup']);
  }

}
