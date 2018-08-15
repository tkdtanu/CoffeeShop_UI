import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = 'CoffeeShop Management System';

  constructor(private router: Router) {
    router.navigate(['/welcome']);
      }
  
}
