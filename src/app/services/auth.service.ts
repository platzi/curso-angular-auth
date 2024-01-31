import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { UserExists } from '@models/response/auth/user-exists.model';

import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/api/auth/login`, { email, password });
  }

  register(name: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/api/auth/register`, {
      name,
      email,
      password,
    });
  }

  registerAndLogin(name: string, email: string, password: string){
    return this.register(name, email, password).pipe(
      switchMap(() => this.login(email, password))
    );
  };

  exists(email: string) {
    return this.http.post<UserExists>(`${this.apiUrl}/api/auth/exists`,{email});
  }
}
