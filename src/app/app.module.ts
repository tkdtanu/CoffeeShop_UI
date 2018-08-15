import { WelcomeComponent } from './welcome-module/welcome.component';
import { SignUpComponent } from './user-module/signup.component';
import { LoginComponent } from './user-module/login.component';
import { OrderComponent } from './order-module/order.component';
import { AuthService } from './service/auth-service';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    OrderComponent,
    LoginComponent,
    SignUpComponent
  ],
  bootstrap: [AppComponent],
  providers: [AuthService]
})
export class AppModule { }
