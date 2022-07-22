import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    setCookie('token-trello', token, { expires: 365, path: '/' });
  }

  getToken() {
    const token = getCookie('token-trello');
    return token;
  }

  removeToken() {
    removeCookie('token-trello');
  }
}
