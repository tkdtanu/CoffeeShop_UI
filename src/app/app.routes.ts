import { WelcomeComponent } from './welcome-module/welcome.component';
import { SignUpComponent } from './user-module/signup.component';
import { LoginComponent } from './user-module/login.component';
import { OrderComponent } from './order-module/order.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Route Configuration
export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'order', component: OrderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);