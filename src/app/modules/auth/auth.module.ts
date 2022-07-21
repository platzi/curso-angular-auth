import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ForgotPasswordFormComponent } from './components/forgot-password-form/forgot-password-form.component';
import { RecoveryFormComponent } from './components/recovery-form/recovery-form.component';
import { BackgroundComponent } from './components/background/background.component';


@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    RegisterFormComponent,
    ForgotPasswordFormComponent,
    BackgroundComponent,
    RecoveryComponent,
    RecoveryFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class AuthModule { }
