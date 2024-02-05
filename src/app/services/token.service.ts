import { Injectable } from '@angular/core';
import { JwtPayload, jwtDecode, } from 'jwt-decode';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
      setCookie('token-trello', token, { expires:365, path: '/' });
  }

  getToken() {
      return getCookie('token-trello');
  }

  removeToken() {
      removeCookie('token-trello');
  }

    saveRefreshToken(token: string) {
      setCookie('token-refresh-trello', token, { expires:365, path: '/' });
  }

  getRefreshToken() {
      return getCookie('token-refresh-trello');
  }

  removeRefreshToken() {
      removeCookie('token-refresh-trello');
  }

  isValidToken(){
    const token = this.getToken();
    if(!token){
      return false;
    }
    const decodeToken:any = jwtDecode(token)
    if(decodeToken && decodeToken?.exp){
        const tokenDate = new Date(0);
        tokenDate.setUTCSeconds(decodeToken.exp);
        const today = new Date();
        return tokenDate.getTime() > today.getTime();
    }
    return false;
  }

  isValidRefreshToken(){
    const token = this.getRefreshToken();
    if(!token){
      return false;
    }
    const decodeToken:any = jwtDecode(token)
    if(decodeToken && decodeToken?.exp){
        const tokenDate = new Date(0);
        tokenDate.setUTCSeconds(decodeToken.exp);
        const today = new Date();
        return tokenDate.getTime() > today.getTime();
    }
    return false;
  }
}

