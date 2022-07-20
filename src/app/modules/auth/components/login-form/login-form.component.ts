import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent {

  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
  });
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  statusCheckEmail: string = 'init';
  statusLogin: string = 'init';
  userExists = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  isAvailable() {
    if (this.form.controls.email.valid) {
      this.statusCheckEmail = 'loading';
      const email = this.form.controls.email.value;
      // TODO
    } else {
      this.form.controls.email.markAsTouched();
    }

  }

  doLogin() {
    if (this.form.valid) {
      this.statusLogin = 'loading';
      const { email, password } = this.form.getRawValue();
      // TODO
    } else {
      this.form.markAllAsTouched();
    }
  }

}
