import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {

  constructor(private router: Router) {
  }
  login() {
    this.router.navigate(['/login']);
  }

}
