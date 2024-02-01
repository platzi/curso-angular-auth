import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { UserExists } from '@models/response/auth/user-exists.model';

import { switchMap, tap } from 'rxjs/operators';
import { TokenService } from './token.service';
import { UserTokenLogin } from '@models/response/auth/user-login.model';
import { UserProfile } from '@models/response/auth/user-profile.model';
import { BehaviorSubject } from 'rxjs';
import { checkToken } from '@interceptors/token.interceptor';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.API_URL;
  userProfile$ = new BehaviorSubject<UserProfile | null>(null);

  constructor(private http: HttpClient, private tokenService:TokenService) {}

  login(email: string, password: string) {
    return this.http.post<UserTokenLogin>(`${this.apiUrl}/api/auth/login`, { email, password })
    .pipe(
      tap( response => {
            this.tokenService.saveToken(response.token);
      }
      ));
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

  logout(){
    this.tokenService.removeToken();
  }

  profile(){
    return this.http.post<UserProfile>(`${this.apiUrl}/api/auth/profile`,{},{ context:checkToken() }).pipe(
      tap(
        userProfile => {
          this.userProfile$.next(userProfile);
        }
      )
    );
  }
}
